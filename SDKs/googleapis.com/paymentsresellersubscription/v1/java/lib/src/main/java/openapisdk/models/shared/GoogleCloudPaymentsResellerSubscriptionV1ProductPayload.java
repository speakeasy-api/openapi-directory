package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1ProductPayload
 * Specifies product specific payload.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1ProductPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleOnePayload")
    public GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload googleOnePayload;
    public GoogleCloudPaymentsResellerSubscriptionV1ProductPayload withGoogleOnePayload(GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload googleOnePayload) {
        this.googleOnePayload = googleOnePayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubePayload")
    public GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload youtubePayload;
    public GoogleCloudPaymentsResellerSubscriptionV1ProductPayload withYoutubePayload(GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload youtubePayload) {
        this.youtubePayload = youtubePayload;
        return this;
    }
}