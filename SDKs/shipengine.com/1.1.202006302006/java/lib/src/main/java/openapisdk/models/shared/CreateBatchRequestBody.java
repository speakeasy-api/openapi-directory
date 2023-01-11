package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBatchRequestBody
 * A create batch request body
**/
public class CreateBatchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch_notes")
    public String batchNotes;
    public CreateBatchRequestBody withBatchNotes(String batchNotes) {
        this.batchNotes = batchNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_batch_id")
    public String externalBatchId;
    public CreateBatchRequestBody withExternalBatchId(String externalBatchId) {
        this.externalBatchId = externalBatchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_ids")
    public java.util.Map<String, Object>[] rateIds;
    public CreateBatchRequestBody withRateIds(java.util.Map<String, Object>[] rateIds) {
        this.rateIds = rateIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_ids")
    public String[] shipmentIds;
    public CreateBatchRequestBody withShipmentIds(String[] shipmentIds) {
        this.shipmentIds = shipmentIds;
        return this;
    }
}