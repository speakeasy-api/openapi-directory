package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2FindingLimits
 * Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.
**/
public class GooglePrivacyDlpV2FindingLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxFindingsPerInfoType")
    public GooglePrivacyDlpV2InfoTypeLimit[] maxFindingsPerInfoType;
    public GooglePrivacyDlpV2FindingLimits withMaxFindingsPerInfoType(GooglePrivacyDlpV2InfoTypeLimit[] maxFindingsPerInfoType) {
        this.maxFindingsPerInfoType = maxFindingsPerInfoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxFindingsPerItem")
    public Integer maxFindingsPerItem;
    public GooglePrivacyDlpV2FindingLimits withMaxFindingsPerItem(Integer maxFindingsPerItem) {
        this.maxFindingsPerItem = maxFindingsPerItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxFindingsPerRequest")
    public Integer maxFindingsPerRequest;
    public GooglePrivacyDlpV2FindingLimits withMaxFindingsPerRequest(Integer maxFindingsPerRequest) {
        this.maxFindingsPerRequest = maxFindingsPerRequest;
        return this;
    }
}