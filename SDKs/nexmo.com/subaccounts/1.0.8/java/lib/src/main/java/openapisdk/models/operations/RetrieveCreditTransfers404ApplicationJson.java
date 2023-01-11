package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RetrieveCreditTransfers404ApplicationJson
 * Invalid API Key
**/
public class RetrieveCreditTransfers404ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public RetrieveCreditTransfers404ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public RetrieveCreditTransfers404ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public RetrieveCreditTransfers404ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrieveCreditTransfers404ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}