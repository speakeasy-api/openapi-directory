package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource
 * A snapshot of a resource as before or after the result of a change in change history.
**/
public class GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public GoogleAnalyticsAdminV1betaAccount account;
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource withAccount(GoogleAnalyticsAdminV1betaAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionEvent")
    public GoogleAnalyticsAdminV1betaConversionEvent conversionEvent;
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource withConversionEvent(GoogleAnalyticsAdminV1betaConversionEvent conversionEvent) {
        this.conversionEvent = conversionEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRetentionSettings")
    public GoogleAnalyticsAdminV1betaDataRetentionSettings dataRetentionSettings;
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource withDataRetentionSettings(GoogleAnalyticsAdminV1betaDataRetentionSettings dataRetentionSettings) {
        this.dataRetentionSettings = dataRetentionSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataStream")
    public GoogleAnalyticsAdminV1betaDataStream dataStream;
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource withDataStream(GoogleAnalyticsAdminV1betaDataStream dataStream) {
        this.dataStream = dataStream;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firebaseLink")
    public GoogleAnalyticsAdminV1betaFirebaseLink firebaseLink;
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource withFirebaseLink(GoogleAnalyticsAdminV1betaFirebaseLink firebaseLink) {
        this.firebaseLink = firebaseLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAdsLink")
    public GoogleAnalyticsAdminV1betaGoogleAdsLink googleAdsLink;
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource withGoogleAdsLink(GoogleAnalyticsAdminV1betaGoogleAdsLink googleAdsLink) {
        this.googleAdsLink = googleAdsLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementProtocolSecret")
    public GoogleAnalyticsAdminV1betaMeasurementProtocolSecret measurementProtocolSecret;
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource withMeasurementProtocolSecret(GoogleAnalyticsAdminV1betaMeasurementProtocolSecret measurementProtocolSecret) {
        this.measurementProtocolSecret = measurementProtocolSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public GoogleAnalyticsAdminV1betaProperty property;
    public GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource withProperty(GoogleAnalyticsAdminV1betaProperty property) {
        this.property = property;
        return this;
    }
}