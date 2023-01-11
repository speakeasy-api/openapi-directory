package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Relation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String[] category;
    public Relation withCategory(String[] category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consider")
    public String[] consider;
    public Relation withConsider(String[] consider) {
        this.consider = consider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public Relation withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Relation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Relation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iri")
    public String iri;
    public Relation withIri(String iri) {
        this.iri = iri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Relation withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaced_by")
    public String[] replacedBy;
    public Relation withReplacedBy(String[] replacedBy) {
        this.replacedBy = replacedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synonyms")
    public SynonymPropertyValue[] synonyms;
    public Relation withSynonyms(SynonymPropertyValue[] synonyms) {
        this.synonyms = synonyms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public String[] types;
    public Relation withTypes(String[] types) {
        this.types = types;
        return this;
    }
}