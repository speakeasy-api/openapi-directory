package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1TransferableSku
 * TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.
**/
public class GoogleCloudChannelV1TransferableSku {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacySku")
    public GoogleCloudChannelV1Sku legacySku;
    public GoogleCloudChannelV1TransferableSku withLegacySku(GoogleCloudChannelV1Sku legacySku) {
        this.legacySku = legacySku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public GoogleCloudChannelV1Sku sku;
    public GoogleCloudChannelV1TransferableSku withSku(GoogleCloudChannelV1Sku sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferEligibility")
    public GoogleCloudChannelV1TransferEligibility transferEligibility;
    public GoogleCloudChannelV1TransferableSku withTransferEligibility(GoogleCloudChannelV1TransferEligibility transferEligibility) {
        this.transferEligibility = transferEligibility;
        return this;
    }
}