package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudResourcesettingsV1ListSettingsResponse
 * The response from ListSettings.
**/
public class GoogleCloudResourcesettingsV1ListSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudResourcesettingsV1ListSettingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public GoogleCloudResourcesettingsV1Setting[] settings;
    public GoogleCloudResourcesettingsV1ListSettingsResponse withSettings(GoogleCloudResourcesettingsV1Setting[] settings) {
        this.settings = settings;
        return this;
    }
}