package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RetrieveBalanceTransfers404ApplicationJson
 * Invalid API Key
**/
public class RetrieveBalanceTransfers404ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public RetrieveBalanceTransfers404ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public RetrieveBalanceTransfers404ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public RetrieveBalanceTransfers404ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrieveBalanceTransfers404ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}