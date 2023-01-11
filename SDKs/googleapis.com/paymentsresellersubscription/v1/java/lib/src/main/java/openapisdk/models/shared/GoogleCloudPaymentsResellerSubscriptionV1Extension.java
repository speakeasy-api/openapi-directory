package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1Extension
 * Describes the details of an extension request.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1Extension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public GoogleCloudPaymentsResellerSubscriptionV1Duration duration;
    public GoogleCloudPaymentsResellerSubscriptionV1Extension withDuration(GoogleCloudPaymentsResellerSubscriptionV1Duration duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerUserToken")
    public String partnerUserToken;
    public GoogleCloudPaymentsResellerSubscriptionV1Extension withPartnerUserToken(String partnerUserToken) {
        this.partnerUserToken = partnerUserToken;
        return this;
    }
}