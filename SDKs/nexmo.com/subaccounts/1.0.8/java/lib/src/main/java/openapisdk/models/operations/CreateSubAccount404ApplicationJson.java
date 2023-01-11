package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateSubAccount404ApplicationJson
 * Invalid API Key
**/
public class CreateSubAccount404ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public CreateSubAccount404ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public CreateSubAccount404ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public CreateSubAccount404ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CreateSubAccount404ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}