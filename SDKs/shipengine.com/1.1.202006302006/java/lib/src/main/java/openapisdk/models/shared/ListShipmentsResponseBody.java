package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListShipmentsResponseBody
 * A list shipment response body
**/
public class ListShipmentsResponseBody {
    @JsonProperty("links")
    public ListShipmentsResponseBodyPaginationLink links;
    public ListShipmentsResponseBody withLinks(ListShipmentsResponseBodyPaginationLink links) {
        this.links = links;
        return this;
    }
    @JsonProperty("page")
    public Integer page;
    public ListShipmentsResponseBody withPage(Integer page) {
        this.page = page;
        return this;
    }
    @JsonProperty("pages")
    public Integer pages;
    public ListShipmentsResponseBody withPages(Integer pages) {
        this.pages = pages;
        return this;
    }
    @JsonProperty("shipments")
    public ListShipmentsResponseBodyPartialShipment[] shipments;
    public ListShipmentsResponseBody withShipments(ListShipmentsResponseBodyPartialShipment[] shipments) {
        this.shipments = shipments;
        return this;
    }
    @JsonProperty("total")
    public Long total;
    public ListShipmentsResponseBody withTotal(Long total) {
        this.total = total;
        return this;
    }
}