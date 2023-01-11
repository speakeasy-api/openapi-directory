package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkCheckResponse
 * Response for BulkCheck call. Results are sent in a list in the same order in which they were sent. Individual check errors are described in the appropriate check_results entry. If the entire call fails, the response will include a bulk_error_code field describing the error.
**/
public class BulkCheckResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bulkErrorCode")
    public BulkCheckResponseBulkErrorCodeEnum bulkErrorCode;
    public BulkCheckResponse withBulkErrorCode(BulkCheckResponseBulkErrorCodeEnum bulkErrorCode) {
        this.bulkErrorCode = bulkErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkResults")
    public CheckResponse[] checkResults;
    public BulkCheckResponse withCheckResults(CheckResponse[] checkResults) {
        this.checkResults = checkResults;
        return this;
    }
}