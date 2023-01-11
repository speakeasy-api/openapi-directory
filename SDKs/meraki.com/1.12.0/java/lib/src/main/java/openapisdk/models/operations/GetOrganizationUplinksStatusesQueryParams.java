package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationUplinksStatusesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetOrganizationUplinksStatusesQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=iccids")
    public String[] iccids;
    public GetOrganizationUplinksStatusesQueryParams withIccids(String[] iccids) {
        this.iccids = iccids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=networkIds")
    public String[] networkIds;
    public GetOrganizationUplinksStatusesQueryParams withNetworkIds(String[] networkIds) {
        this.networkIds = networkIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetOrganizationUplinksStatusesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=serials")
    public String[] serials;
    public GetOrganizationUplinksStatusesQueryParams withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetOrganizationUplinksStatusesQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
}