package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConceptArticleListResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public ConceptArticleListResults withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byline")
    public String byline;
    public ConceptArticleListResults withByline(String byline) {
        this.byline = byline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concepts")
    public ConceptArticleListResultsConcepts concepts;
    public ConceptArticleListResults withConcepts(ConceptArticleListResultsConcepts concepts) {
        this.concepts = concepts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public ConceptArticleListResults withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_type")
    public String documentType;
    public ConceptArticleListResults withDocumentType(String documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ConceptArticleListResults withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type_of_material")
    public String typeOfMaterial;
    public ConceptArticleListResults withTypeOfMaterial(String typeOfMaterial) {
        this.typeOfMaterial = typeOfMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConceptArticleListResults withUrl(String url) {
        this.url = url;
        return this;
    }
}