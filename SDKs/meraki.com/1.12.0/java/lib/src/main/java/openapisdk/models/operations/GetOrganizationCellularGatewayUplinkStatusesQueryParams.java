package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationCellularGatewayUplinkStatusesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetOrganizationCellularGatewayUplinkStatusesQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=iccids")
    public String[] iccids;
    public GetOrganizationCellularGatewayUplinkStatusesQueryParams withIccids(String[] iccids) {
        this.iccids = iccids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=networkIds")
    public String[] networkIds;
    public GetOrganizationCellularGatewayUplinkStatusesQueryParams withNetworkIds(String[] networkIds) {
        this.networkIds = networkIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetOrganizationCellularGatewayUplinkStatusesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=serials")
    public String[] serials;
    public GetOrganizationCellularGatewayUplinkStatusesQueryParams withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetOrganizationCellularGatewayUplinkStatusesQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
}