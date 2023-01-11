package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData
 * Data specific to iOS app streams.
**/
public class GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firebaseAppId")
    public String firebaseAppId;
    public GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData withFirebaseAppId(String firebaseAppId) {
        this.firebaseAppId = firebaseAppId;
        return this;
    }
}