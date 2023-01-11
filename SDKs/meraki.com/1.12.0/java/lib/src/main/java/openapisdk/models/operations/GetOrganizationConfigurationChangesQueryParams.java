package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationConfigurationChangesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=adminId")
    public String adminId;
    public GetOrganizationConfigurationChangesQueryParams withAdminId(String adminId) {
        this.adminId = adminId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetOrganizationConfigurationChangesQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=networkId")
    public String networkId;
    public GetOrganizationConfigurationChangesQueryParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetOrganizationConfigurationChangesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetOrganizationConfigurationChangesQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetOrganizationConfigurationChangesQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetOrganizationConfigurationChangesQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetOrganizationConfigurationChangesQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}