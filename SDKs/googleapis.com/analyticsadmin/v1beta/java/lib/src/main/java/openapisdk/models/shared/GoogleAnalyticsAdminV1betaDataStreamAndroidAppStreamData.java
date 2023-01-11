package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData
 * Data specific to Android app streams.
**/
public class GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firebaseAppId")
    public String firebaseAppId;
    public GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData withFirebaseAppId(String firebaseAppId) {
        this.firebaseAppId = firebaseAppId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}