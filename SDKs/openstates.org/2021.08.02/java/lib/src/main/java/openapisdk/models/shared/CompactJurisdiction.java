package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CompactJurisdiction {
    @JsonProperty("classification")
    public JurisdictionClassificationEnum classification;
    public CompactJurisdiction withClassification(JurisdictionClassificationEnum classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CompactJurisdiction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CompactJurisdiction withName(String name) {
        this.name = name;
        return this;
    }
}