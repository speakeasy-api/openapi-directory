package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ChangeOfferRequestInput
 * Request message for CloudChannelService.ChangeOffer.
**/
public class GoogleCloudChannelV1ChangeOfferRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offer")
    public String offer;
    public GoogleCloudChannelV1ChangeOfferRequestInput withOffer(String offer) {
        this.offer = offer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public GoogleCloudChannelV1ParameterInput[] parameters;
    public GoogleCloudChannelV1ChangeOfferRequestInput withParameters(GoogleCloudChannelV1ParameterInput[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderId")
    public String purchaseOrderId;
    public GoogleCloudChannelV1ChangeOfferRequestInput withPurchaseOrderId(String purchaseOrderId) {
        this.purchaseOrderId = purchaseOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudChannelV1ChangeOfferRequestInput withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}