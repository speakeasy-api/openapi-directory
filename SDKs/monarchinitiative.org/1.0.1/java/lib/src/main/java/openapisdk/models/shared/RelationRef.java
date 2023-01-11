package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RelationRef {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String[] category;
    public RelationRef withCategory(String[] category) {
        this.category = category;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public RelationRef withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inverse")
    public Boolean inverse;
    public RelationRef withInverse(Boolean inverse) {
        this.inverse = inverse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iri")
    public String iri;
    public RelationRef withIri(String iri) {
        this.iri = iri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public RelationRef withLabel(String label) {
        this.label = label;
        return this;
    }
}