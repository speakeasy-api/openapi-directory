package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseMessage
 * A response message that displays when additional info is needed for an address validation request.
**/
public class ResponseMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public java.util.Map<String, Object> code;
    public ResponseMessage withCode(java.util.Map<String, Object> code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail_code")
    public java.util.Map<String, Object> detailCode;
    public ResponseMessage withDetailCode(java.util.Map<String, Object> detailCode) {
        this.detailCode = detailCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ResponseMessage withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public java.util.Map<String, Object> type;
    public ResponseMessage withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
}