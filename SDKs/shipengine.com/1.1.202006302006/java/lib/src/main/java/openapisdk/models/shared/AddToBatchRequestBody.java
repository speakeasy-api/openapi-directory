package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddToBatchRequestBody
 * A modify batch object
**/
public class AddToBatchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_ids")
    public String[] rateIds;
    public AddToBatchRequestBody withRateIds(String[] rateIds) {
        this.rateIds = rateIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_ids")
    public String[] shipmentIds;
    public AddToBatchRequestBody withShipmentIds(String[] shipmentIds) {
        this.shipmentIds = shipmentIds;
        return this;
    }
}