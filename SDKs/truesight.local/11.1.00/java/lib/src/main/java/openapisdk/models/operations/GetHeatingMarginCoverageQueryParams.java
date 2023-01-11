package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHeatingMarginCoverageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=applicationId")
    public String applicationId;
    public GetHeatingMarginCoverageQueryParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=covered")
    public Boolean covered;
    public GetHeatingMarginCoverageQueryParams withCovered(Boolean covered) {
        this.covered = covered;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetHeatingMarginCoverageDirectionEnum direction;
    public GetHeatingMarginCoverageQueryParams withDirection(GetHeatingMarginCoverageDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupId")
    public String groupId;
    public GetHeatingMarginCoverageQueryParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetHeatingMarginCoverageQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetHeatingMarginCoverageQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceId")
    public String serviceId;
    public GetHeatingMarginCoverageQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetHeatingMarginCoverageQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}