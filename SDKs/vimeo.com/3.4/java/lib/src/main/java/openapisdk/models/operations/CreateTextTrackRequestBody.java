package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTextTrackRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateTextTrackRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public CreateTextTrackRequestBody withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateTextTrackRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public CreateTextTrackRequestBodyTypeEnum type;
    public CreateTextTrackRequestBody withType(CreateTextTrackRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}