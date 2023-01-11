package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1LocationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ignorePrimary")
    public Boolean ignorePrimary;
    public GetConsumerV1LocationsQueryParams withIgnorePrimary(Boolean ignorePrimary) {
        this.ignorePrimary = ignorePrimary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetConsumerV1LocationsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetConsumerV1LocationsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nearestTo")
    public String nearestTo;
    public GetConsumerV1LocationsQueryParams withNearestTo(String nearestTo) {
        this.nearestTo = nearestTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetConsumerV1LocationsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proximity")
    public Integer proximity;
    public GetConsumerV1LocationsQueryParams withProximity(Integer proximity) {
        this.proximity = proximity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionId")
    public String regionId;
    public GetConsumerV1LocationsQueryParams withRegionId(String regionId) {
        this.regionId = regionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceId")
    public String serviceId;
    public GetConsumerV1LocationsQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=units")
    public String units;
    public GetConsumerV1LocationsQueryParams withUnits(String units) {
        this.units = units;
        return this;
    }
}