package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CreateStoredInfoTypeRequest
 * Request message for CreateStoredInfoType.
**/
public class GooglePrivacyDlpV2CreateStoredInfoTypeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public GooglePrivacyDlpV2StoredInfoTypeConfig config;
    public GooglePrivacyDlpV2CreateStoredInfoTypeRequest withConfig(GooglePrivacyDlpV2StoredInfoTypeConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public GooglePrivacyDlpV2CreateStoredInfoTypeRequest withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storedInfoTypeId")
    public String storedInfoTypeId;
    public GooglePrivacyDlpV2CreateStoredInfoTypeRequest withStoredInfoTypeId(String storedInfoTypeId) {
        this.storedInfoTypeId = storedInfoTypeId;
        return this;
    }
}