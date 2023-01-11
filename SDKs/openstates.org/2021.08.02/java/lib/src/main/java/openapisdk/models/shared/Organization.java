package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Organization {
    @JsonProperty("classification")
    public String classification;
    public Organization withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Organization withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Organization withName(String name) {
        this.name = name;
        return this;
    }
}