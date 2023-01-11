package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2UpdateStoredInfoTypeRequest
 * Request message for UpdateStoredInfoType.
**/
public class GooglePrivacyDlpV2UpdateStoredInfoTypeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public GooglePrivacyDlpV2StoredInfoTypeConfig config;
    public GooglePrivacyDlpV2UpdateStoredInfoTypeRequest withConfig(GooglePrivacyDlpV2StoredInfoTypeConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GooglePrivacyDlpV2UpdateStoredInfoTypeRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}