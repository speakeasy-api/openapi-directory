package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseHeader
 * Elements common to every response.
**/
public class ResponseHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public ResponseHeader withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}