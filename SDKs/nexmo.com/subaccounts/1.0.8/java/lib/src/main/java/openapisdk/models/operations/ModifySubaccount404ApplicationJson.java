package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ModifySubaccount404ApplicationJson
 * Invalid API Key
**/
public class ModifySubaccount404ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public ModifySubaccount404ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ModifySubaccount404ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ModifySubaccount404ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ModifySubaccount404ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}