package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class QualityConcern {
    @JsonProperty("code")
    public String code;
    public QualityConcern withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public QualityConcern withDescription(String description) {
        this.description = description;
        return this;
    }
}