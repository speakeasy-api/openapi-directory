package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrieveSubaccount401ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public RetrieveSubaccount401ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public RetrieveSubaccount401ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public RetrieveSubaccount401ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrieveSubaccount401ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}