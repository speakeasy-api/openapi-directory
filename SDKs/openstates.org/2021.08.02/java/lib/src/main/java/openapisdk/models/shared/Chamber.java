package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Chamber {
    @JsonProperty("classification")
    public String classification;
    public Chamber withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("districts")
    public Post[] districts;
    public Chamber withDistricts(Post[] districts) {
        this.districts = districts;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Chamber withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Chamber withName(String name) {
        this.name = name;
        return this;
    }
}