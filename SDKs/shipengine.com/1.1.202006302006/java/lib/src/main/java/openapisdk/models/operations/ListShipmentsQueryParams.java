package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListShipmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=batch_id")
    public String batchId;
    public ListShipmentsQueryParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at_end")
    public OffsetDateTime createdAtEnd;
    public ListShipmentsQueryParams withCreatedAtEnd(OffsetDateTime createdAtEnd) {
        this.createdAtEnd = createdAtEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at_start")
    public OffsetDateTime createdAtStart;
    public ListShipmentsQueryParams withCreatedAtStart(OffsetDateTime createdAtStart) {
        this.createdAtStart = createdAtStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_at_end")
    public OffsetDateTime modifiedAtEnd;
    public ListShipmentsQueryParams withModifiedAtEnd(OffsetDateTime modifiedAtEnd) {
        this.modifiedAtEnd = modifiedAtEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_at_start")
    public OffsetDateTime modifiedAtStart;
    public ListShipmentsQueryParams withModifiedAtStart(OffsetDateTime modifiedAtStart) {
        this.modifiedAtStart = modifiedAtStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListShipmentsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public ListShipmentsQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sales_order_id")
    public String salesOrderId;
    public ListShipmentsQueryParams withSalesOrderId(String salesOrderId) {
        this.salesOrderId = salesOrderId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=shipment_status")
    public openapisdk.models.shared.ShipmentStatusEnum shipmentStatus;
    public ListShipmentsQueryParams withShipmentStatus(openapisdk.models.shared.ShipmentStatusEnum shipmentStatus) {
        this.shipmentStatus = shipmentStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public openapisdk.models.shared.ShipmentsSortByEnum sortBy;
    public ListShipmentsQueryParams withSortBy(openapisdk.models.shared.ShipmentsSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_dir")
    public java.util.Map<String, Object> sortDir;
    public ListShipmentsQueryParams withSortDir(java.util.Map<String, Object> sortDir) {
        this.sortDir = sortDir;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public ListShipmentsQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
}