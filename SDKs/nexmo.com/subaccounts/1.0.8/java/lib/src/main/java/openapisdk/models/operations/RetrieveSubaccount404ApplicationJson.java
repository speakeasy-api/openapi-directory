package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RetrieveSubaccount404ApplicationJson
 * Invalid API Key
**/
public class RetrieveSubaccount404ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public RetrieveSubaccount404ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public RetrieveSubaccount404ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public RetrieveSubaccount404ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrieveSubaccount404ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}