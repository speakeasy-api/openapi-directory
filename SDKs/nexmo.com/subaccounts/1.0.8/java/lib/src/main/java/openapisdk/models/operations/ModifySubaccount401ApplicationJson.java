package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifySubaccount401ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public ModifySubaccount401ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ModifySubaccount401ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ModifySubaccount401ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ModifySubaccount401ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}