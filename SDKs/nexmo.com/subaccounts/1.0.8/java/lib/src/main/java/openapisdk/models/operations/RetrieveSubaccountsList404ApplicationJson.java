package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RetrieveSubaccountsList404ApplicationJson
 * Invalid API Key
**/
public class RetrieveSubaccountsList404ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public RetrieveSubaccountsList404ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public RetrieveSubaccountsList404ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public RetrieveSubaccountsList404ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrieveSubaccountsList404ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}