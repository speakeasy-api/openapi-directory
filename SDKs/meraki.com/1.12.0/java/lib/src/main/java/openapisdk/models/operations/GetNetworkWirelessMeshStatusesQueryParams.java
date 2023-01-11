package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessMeshStatusesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetNetworkWirelessMeshStatusesQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetNetworkWirelessMeshStatusesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetNetworkWirelessMeshStatusesQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
}