package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InvalidNumberTransferErrorResponse
 * Invalid Transfer
**/
public class InvalidNumberTransferErrorResponse {
    @JsonProperty("detail")
    public String detail;
    public InvalidNumberTransferErrorResponse withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public InvalidNumberTransferErrorResponse withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public InvalidNumberTransferErrorResponse withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public InvalidNumberTransferErrorResponse withType(String type) {
        this.type = type;
        return this;
    }
}