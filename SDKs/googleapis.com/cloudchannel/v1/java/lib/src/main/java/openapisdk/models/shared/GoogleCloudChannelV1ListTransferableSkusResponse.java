package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListTransferableSkusResponse
 * Response message for CloudChannelService.ListTransferableSkus.
**/
public class GoogleCloudChannelV1ListTransferableSkusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListTransferableSkusResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferableSkus")
    public GoogleCloudChannelV1TransferableSku[] transferableSkus;
    public GoogleCloudChannelV1ListTransferableSkusResponse withTransferableSkus(GoogleCloudChannelV1TransferableSku[] transferableSkus) {
        this.transferableSkus = transferableSkus;
        return this;
    }
}