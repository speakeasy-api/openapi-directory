package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1ServicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allLocations")
    public Boolean allLocations;
    public GetConsumerV1ServicesQueryParams withAllLocations(Boolean allLocations) {
        this.allLocations = allLocations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=defaultService")
    public Boolean defaultService;
    public GetConsumerV1ServicesQueryParams withDefaultService(Boolean defaultService) {
        this.defaultService = defaultService;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetConsumerV1ServicesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1ServicesQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetConsumerV1ServicesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetConsumerV1ServicesQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scope")
    public Integer scope;
    public GetConsumerV1ServicesQueryParams withScope(Integer scope) {
        this.scope = scope;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceGroupId")
    public Integer serviceGroupId;
    public GetConsumerV1ServicesQueryParams withServiceGroupId(Integer serviceGroupId) {
        this.serviceGroupId = serviceGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceId")
    public String serviceId;
    public GetConsumerV1ServicesQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortDescending")
    public Boolean sortDescending;
    public GetConsumerV1ServicesQueryParams withSortDescending(Boolean sortDescending) {
        this.sortDescending = sortDescending;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public Integer sortOrder;
    public GetConsumerV1ServicesQueryParams withSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}