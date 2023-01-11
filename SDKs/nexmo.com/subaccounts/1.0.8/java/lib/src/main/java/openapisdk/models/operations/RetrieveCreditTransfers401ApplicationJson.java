package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrieveCreditTransfers401ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public RetrieveCreditTransfers401ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public RetrieveCreditTransfers401ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public RetrieveCreditTransfers401ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrieveCreditTransfers401ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}