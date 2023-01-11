package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TransformationErrorHandling
 * How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`.
**/
public class GooglePrivacyDlpV2TransformationErrorHandling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leaveUntransformed")
    public java.util.Map<String, Object> leaveUntransformed;
    public GooglePrivacyDlpV2TransformationErrorHandling withLeaveUntransformed(java.util.Map<String, Object> leaveUntransformed) {
        this.leaveUntransformed = leaveUntransformed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("throwError")
    public java.util.Map<String, Object> throwError;
    public GooglePrivacyDlpV2TransformationErrorHandling withThrowError(java.util.Map<String, Object> throwError) {
        this.throwError = throwError;
        return this;
    }
}