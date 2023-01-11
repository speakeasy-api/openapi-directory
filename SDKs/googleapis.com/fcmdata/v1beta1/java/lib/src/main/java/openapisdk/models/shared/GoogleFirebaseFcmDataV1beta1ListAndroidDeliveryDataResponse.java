package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse
 * Response message for ListAndroidDeliveryData.
**/
public class GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidDeliveryData")
    public GoogleFirebaseFcmDataV1beta1AndroidDeliveryData[] androidDeliveryData;
    public GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse withAndroidDeliveryData(GoogleFirebaseFcmDataV1beta1AndroidDeliveryData[] androidDeliveryData) {
        this.androidDeliveryData = androidDeliveryData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}