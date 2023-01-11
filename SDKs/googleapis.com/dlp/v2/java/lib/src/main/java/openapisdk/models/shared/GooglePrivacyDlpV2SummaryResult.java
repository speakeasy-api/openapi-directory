package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2SummaryResult
 * A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.
**/
public class GooglePrivacyDlpV2SummaryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public GooglePrivacyDlpV2SummaryResultCodeEnum code;
    public GooglePrivacyDlpV2SummaryResult withCode(GooglePrivacyDlpV2SummaryResultCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public GooglePrivacyDlpV2SummaryResult withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public GooglePrivacyDlpV2SummaryResult withDetails(String details) {
        this.details = details;
        return this;
    }
}