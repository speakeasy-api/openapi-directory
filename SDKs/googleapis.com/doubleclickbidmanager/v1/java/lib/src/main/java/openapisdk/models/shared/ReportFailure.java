package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportFailure
 * An explanation of a report failure.
**/
public class ReportFailure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public ReportFailureErrorCodeEnum errorCode;
    public ReportFailure withErrorCode(ReportFailureErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
}