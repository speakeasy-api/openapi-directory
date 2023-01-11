package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1ResourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetConsumerV1ResourcesQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetConsumerV1ResourcesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1ResourcesQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetConsumerV1ResourcesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetConsumerV1ResourcesQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceGroupId")
    public Integer resourceGroupId;
    public GetConsumerV1ResourcesQueryParams withResourceGroupId(Integer resourceGroupId) {
        this.resourceGroupId = resourceGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public String sortOrder;
    public GetConsumerV1ResourcesQueryParams withSortOrder(String sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}