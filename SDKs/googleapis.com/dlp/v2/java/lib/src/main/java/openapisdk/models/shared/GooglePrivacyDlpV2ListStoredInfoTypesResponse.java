package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ListStoredInfoTypesResponse
 * Response message for ListStoredInfoTypes.
**/
public class GooglePrivacyDlpV2ListStoredInfoTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GooglePrivacyDlpV2ListStoredInfoTypesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storedInfoTypes")
    public GooglePrivacyDlpV2StoredInfoType[] storedInfoTypes;
    public GooglePrivacyDlpV2ListStoredInfoTypesResponse withStoredInfoTypes(GooglePrivacyDlpV2StoredInfoType[] storedInfoTypes) {
        this.storedInfoTypes = storedInfoTypes;
        return this;
    }
}