package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTextTrackAlt1RequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateTextTrackAlt1RequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public CreateTextTrackAlt1RequestBody withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateTextTrackAlt1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public CreateTextTrackAlt1RequestBodyTypeEnum type;
    public CreateTextTrackAlt1RequestBody withType(CreateTextTrackAlt1RequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}