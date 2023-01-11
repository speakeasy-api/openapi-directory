package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=applicationId")
    public String applicationId;
    public GetDevicesQueryParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetDevicesDirectionEnum direction;
    public GetDevicesQueryParams withDirection(GetDevicesDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupId")
    public String groupId;
    public GetDevicesQueryParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetDevicesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetDevicesQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceId")
    public String serviceId;
    public GetDevicesQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetDevicesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}