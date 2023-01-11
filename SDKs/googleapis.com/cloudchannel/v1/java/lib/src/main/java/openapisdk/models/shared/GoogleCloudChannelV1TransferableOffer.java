package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1TransferableOffer
 * TransferableOffer represents an Offer that can be used in Transfer. Read-only.
**/
public class GoogleCloudChannelV1TransferableOffer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offer")
    public GoogleCloudChannelV1Offer offer;
    public GoogleCloudChannelV1TransferableOffer withOffer(GoogleCloudChannelV1Offer offer) {
        this.offer = offer;
        return this;
    }
}