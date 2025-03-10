/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.time.OffsetDateTime;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListShipmentsRequest {
    /**
     * Batch ID
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=batch_id")
    public String batchId;

    public ListShipmentsRequest withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
    
    /**
     * Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at_end")
    public OffsetDateTime createdAtEnd;

    public ListShipmentsRequest withCreatedAtEnd(OffsetDateTime createdAtEnd) {
        this.createdAtEnd = createdAtEnd;
        return this;
    }
    
    /**
     * Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at_start")
    public OffsetDateTime createdAtStart;

    public ListShipmentsRequest withCreatedAtStart(OffsetDateTime createdAtStart) {
        this.createdAtStart = createdAtStart;
        return this;
    }
    
    /**
     * Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_at_end")
    public OffsetDateTime modifiedAtEnd;

    public ListShipmentsRequest withModifiedAtEnd(OffsetDateTime modifiedAtEnd) {
        this.modifiedAtEnd = modifiedAtEnd;
        return this;
    }
    
    /**
     * Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_at_start")
    public OffsetDateTime modifiedAtStart;

    public ListShipmentsRequest withModifiedAtStart(OffsetDateTime modifiedAtStart) {
        this.modifiedAtStart = modifiedAtStart;
        return this;
    }
    
    /**
     * Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;

    public ListShipmentsRequest withPage(Integer page) {
        this.page = page;
        return this;
    }
    
    /**
     * The number of results to return per response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;

    public ListShipmentsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * Sales Order ID
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sales_order_id")
    public String salesOrderId;

    public ListShipmentsRequest withSalesOrderId(String salesOrderId) {
        this.salesOrderId = salesOrderId;
        return this;
    }
    
    /**
     * The possible shipment status values
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=shipment_status")
    public org.openapis.openapi.models.shared.ShipmentStatusEnum shipmentStatus;

    public ListShipmentsRequest withShipmentStatus(org.openapis.openapi.models.shared.ShipmentStatusEnum shipmentStatus) {
        this.shipmentStatus = shipmentStatus;
        return this;
    }
    
    /**
     * The possible shipments sort by values
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public org.openapis.openapi.models.shared.ShipmentsSortByEnum sortBy;

    public ListShipmentsRequest withSortBy(org.openapis.openapi.models.shared.ShipmentsSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    
    /**
     * Controls the sort order of the query.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_dir")
    public ListShipmentsSortDirSortDirEnum sortDir;

    public ListShipmentsRequest withSortDir(ListShipmentsSortDirSortDirEnum sortDir) {
        this.sortDir = sortDir;
        return this;
    }
    
    /**
     * Search for shipments based on the custom tag added to the shipment object
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;

    public ListShipmentsRequest withTag(String tag) {
        this.tag = tag;
        return this;
    }
    
    public ListShipmentsRequest(){}
}
