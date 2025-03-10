package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceClientSecurityEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetNetworkApplianceClientSecurityEventsQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetNetworkApplianceClientSecurityEventsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public GetNetworkApplianceClientSecurityEventsSortOrderEnum sortOrder;
    public GetNetworkApplianceClientSecurityEventsQueryParams withSortOrder(GetNetworkApplianceClientSecurityEventsSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetNetworkApplianceClientSecurityEventsQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkApplianceClientSecurityEventsQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkApplianceClientSecurityEventsQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkApplianceClientSecurityEventsQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}