package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseFcmDataV1beta1AndroidDeliveryData
 * Message delivery data for a given date, app, and analytics label combination.
**/
public class GoogleFirebaseFcmDataV1beta1AndroidDeliveryData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsLabel")
    public String analyticsLabel;
    public GoogleFirebaseFcmDataV1beta1AndroidDeliveryData withAnalyticsLabel(String analyticsLabel) {
        this.analyticsLabel = analyticsLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public GoogleFirebaseFcmDataV1beta1AndroidDeliveryData withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GoogleFirebaseFcmDataV1beta1Data data;
    public GoogleFirebaseFcmDataV1beta1AndroidDeliveryData withData(GoogleFirebaseFcmDataV1beta1Data data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public GoogleTypeDate date;
    public GoogleFirebaseFcmDataV1beta1AndroidDeliveryData withDate(GoogleTypeDate date) {
        this.date = date;
        return this;
    }
}