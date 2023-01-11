package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchErrorResponse
 * Error
**/
public class SearchErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_text")
    public String errorText;
    public SearchErrorResponse withErrorText(String errorText) {
        this.errorText = errorText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public SearchErrorResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SearchErrorResponseStatusEnum status;
    public SearchErrorResponse withStatus(SearchErrorResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}