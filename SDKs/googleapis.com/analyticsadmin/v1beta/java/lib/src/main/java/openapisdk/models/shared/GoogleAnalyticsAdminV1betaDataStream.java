package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaDataStream
 * A resource message representing a data stream.
**/
public class GoogleAnalyticsAdminV1betaDataStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidAppStreamData")
    public GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData androidAppStreamData;
    public GoogleAnalyticsAdminV1betaDataStream withAndroidAppStreamData(GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData androidAppStreamData) {
        this.androidAppStreamData = androidAppStreamData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAnalyticsAdminV1betaDataStream withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaDataStream withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosAppStreamData")
    public GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData iosAppStreamData;
    public GoogleAnalyticsAdminV1betaDataStream withIosAppStreamData(GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData iosAppStreamData) {
        this.iosAppStreamData = iosAppStreamData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaDataStream withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleAnalyticsAdminV1betaDataStreamTypeEnum type;
    public GoogleAnalyticsAdminV1betaDataStream withType(GoogleAnalyticsAdminV1betaDataStreamTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleAnalyticsAdminV1betaDataStream withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webStreamData")
    public GoogleAnalyticsAdminV1betaDataStreamWebStreamData webStreamData;
    public GoogleAnalyticsAdminV1betaDataStream withWebStreamData(GoogleAnalyticsAdminV1betaDataStreamWebStreamData webStreamData) {
        this.webStreamData = webStreamData;
        return this;
    }
}