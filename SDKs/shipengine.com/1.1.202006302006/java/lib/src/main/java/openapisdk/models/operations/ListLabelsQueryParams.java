package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListLabelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=batch_id")
    public String batchId;
    public ListLabelsQueryParams withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carrier_id")
    public String carrierId;
    public ListLabelsQueryParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at_end")
    public OffsetDateTime createdAtEnd;
    public ListLabelsQueryParams withCreatedAtEnd(OffsetDateTime createdAtEnd) {
        this.createdAtEnd = createdAtEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at_start")
    public OffsetDateTime createdAtStart;
    public ListLabelsQueryParams withCreatedAtStart(OffsetDateTime createdAtStart) {
        this.createdAtStart = createdAtStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_status")
    public openapisdk.models.shared.LabelStatusEnum labelStatus;
    public ListLabelsQueryParams withLabelStatus(openapisdk.models.shared.LabelStatusEnum labelStatus) {
        this.labelStatus = labelStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListLabelsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public ListLabelsQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rate_id")
    public String rateId;
    public ListLabelsQueryParams withRateId(String rateId) {
        this.rateId = rateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service_code")
    public String serviceCode;
    public ListLabelsQueryParams withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=shipment_id")
    public String shipmentId;
    public ListLabelsQueryParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public ListLabelsSortByEnum sortBy;
    public ListLabelsQueryParams withSortBy(ListLabelsSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_dir")
    public java.util.Map<String, Object> sortDir;
    public ListLabelsQueryParams withSortDir(java.util.Map<String, Object> sortDir) {
        this.sortDir = sortDir;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tracking_number")
    public String trackingNumber;
    public ListLabelsQueryParams withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=warehouse_id")
    public String warehouseId;
    public ListLabelsQueryParams withWarehouseId(String warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}