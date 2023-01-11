package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrieveSubaccountsList401ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public RetrieveSubaccountsList401ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public RetrieveSubaccountsList401ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public RetrieveSubaccountsList401ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrieveSubaccountsList401ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}