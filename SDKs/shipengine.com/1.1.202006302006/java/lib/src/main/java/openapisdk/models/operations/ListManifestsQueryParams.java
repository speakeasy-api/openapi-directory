package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListManifestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carrier_id")
    public String carrierId;
    public ListManifestsQueryParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at_end")
    public OffsetDateTime createdAtEnd;
    public ListManifestsQueryParams withCreatedAtEnd(OffsetDateTime createdAtEnd) {
        this.createdAtEnd = createdAtEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at_start")
    public OffsetDateTime createdAtStart;
    public ListManifestsQueryParams withCreatedAtStart(OffsetDateTime createdAtStart) {
        this.createdAtStart = createdAtStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_ids")
    public String[] labelIds;
    public ListManifestsQueryParams withLabelIds(String[] labelIds) {
        this.labelIds = labelIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListManifestsQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public ListManifestsQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ship_date_end")
    public OffsetDateTime shipDateEnd;
    public ListManifestsQueryParams withShipDateEnd(OffsetDateTime shipDateEnd) {
        this.shipDateEnd = shipDateEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ship_date_start")
    public OffsetDateTime shipDateStart;
    public ListManifestsQueryParams withShipDateStart(OffsetDateTime shipDateStart) {
        this.shipDateStart = shipDateStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=warehouse_id")
    public String warehouseId;
    public ListManifestsQueryParams withWarehouseId(String warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}