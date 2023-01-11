package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InfoTypeStats
 * Statistics regarding a specific InfoType.
**/
public class GooglePrivacyDlpV2InfoTypeStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public GooglePrivacyDlpV2InfoTypeStats withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoType")
    public GooglePrivacyDlpV2InfoType infoType;
    public GooglePrivacyDlpV2InfoTypeStats withInfoType(GooglePrivacyDlpV2InfoType infoType) {
        this.infoType = infoType;
        return this;
    }
}