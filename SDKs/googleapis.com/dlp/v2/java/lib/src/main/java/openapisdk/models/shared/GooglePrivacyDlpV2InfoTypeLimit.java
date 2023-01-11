package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InfoTypeLimit
 * Max findings configuration per infoType, per content item or long running DlpJob.
**/
public class GooglePrivacyDlpV2InfoTypeLimit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoType")
    public GooglePrivacyDlpV2InfoType infoType;
    public GooglePrivacyDlpV2InfoTypeLimit withInfoType(GooglePrivacyDlpV2InfoType infoType) {
        this.infoType = infoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxFindings")
    public Integer maxFindings;
    public GooglePrivacyDlpV2InfoTypeLimit withMaxFindings(Integer maxFindings) {
        this.maxFindings = maxFindings;
        return this;
    }
}