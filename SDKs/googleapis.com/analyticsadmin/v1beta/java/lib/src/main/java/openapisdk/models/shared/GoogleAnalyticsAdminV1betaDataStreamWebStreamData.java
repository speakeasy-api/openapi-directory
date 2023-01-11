package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaDataStreamWebStreamData
 * Data specific to web streams.
**/
public class GoogleAnalyticsAdminV1betaDataStreamWebStreamData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultUri")
    public String defaultUri;
    public GoogleAnalyticsAdminV1betaDataStreamWebStreamData withDefaultUri(String defaultUri) {
        this.defaultUri = defaultUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firebaseAppId")
    public String firebaseAppId;
    public GoogleAnalyticsAdminV1betaDataStreamWebStreamData withFirebaseAppId(String firebaseAppId) {
        this.firebaseAppId = firebaseAppId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementId")
    public String measurementId;
    public GoogleAnalyticsAdminV1betaDataStreamWebStreamData withMeasurementId(String measurementId) {
        this.measurementId = measurementId;
        return this;
    }
}