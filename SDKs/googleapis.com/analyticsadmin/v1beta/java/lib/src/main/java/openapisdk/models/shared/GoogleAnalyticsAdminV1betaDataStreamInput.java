package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaDataStreamInput
 * A resource message representing a data stream.
**/
public class GoogleAnalyticsAdminV1betaDataStreamInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidAppStreamData")
    public GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput androidAppStreamData;
    public GoogleAnalyticsAdminV1betaDataStreamInput withAndroidAppStreamData(GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput androidAppStreamData) {
        this.androidAppStreamData = androidAppStreamData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaDataStreamInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosAppStreamData")
    public GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput iosAppStreamData;
    public GoogleAnalyticsAdminV1betaDataStreamInput withIosAppStreamData(GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput iosAppStreamData) {
        this.iosAppStreamData = iosAppStreamData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleAnalyticsAdminV1betaDataStreamTypeEnum type;
    public GoogleAnalyticsAdminV1betaDataStreamInput withType(GoogleAnalyticsAdminV1betaDataStreamTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webStreamData")
    public GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput webStreamData;
    public GoogleAnalyticsAdminV1betaDataStreamInput withWebStreamData(GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput webStreamData) {
        this.webStreamData = webStreamData;
        return this;
    }
}