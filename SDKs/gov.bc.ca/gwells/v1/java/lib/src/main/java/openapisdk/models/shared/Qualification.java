package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Qualification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Qualification withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("well_class")
    public String wellClass;
    public Qualification withWellClass(String wellClass) {
        this.wellClass = wellClass;
        return this;
    }
}