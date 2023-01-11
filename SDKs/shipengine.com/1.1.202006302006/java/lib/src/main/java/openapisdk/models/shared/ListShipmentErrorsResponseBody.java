package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListShipmentErrorsResponseBody
 * A shipment errors response body
**/
public class ListShipmentErrorsResponseBody {
    @JsonProperty("errors")
    public ShipmentResponseError[] errors;
    public ListShipmentErrorsResponseBody withErrors(ShipmentResponseError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("links")
    public ListShipmentErrorsResponseBodyPaginationLink links;
    public ListShipmentErrorsResponseBody withLinks(ListShipmentErrorsResponseBodyPaginationLink links) {
        this.links = links;
        return this;
    }
}