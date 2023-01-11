package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=applicationId")
    public String applicationId;
    public SearchDevicesQueryParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupId")
    public String groupId;
    public SearchDevicesQueryParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public SearchDevicesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public SearchDevicesQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchTerms")
    public String searchTerms;
    public SearchDevicesQueryParams withSearchTerms(String searchTerms) {
        this.searchTerms = searchTerms;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceId")
    public String serviceId;
    public SearchDevicesQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}