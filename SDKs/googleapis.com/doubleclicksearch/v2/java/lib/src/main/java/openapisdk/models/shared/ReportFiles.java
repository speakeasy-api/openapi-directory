package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byteCount")
    public String byteCount;
    public ReportFiles withByteCount(String byteCount) {
        this.byteCount = byteCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ReportFiles withUrl(String url) {
        this.url = url;
        return this;
    }
}