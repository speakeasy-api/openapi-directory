package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkClientsUsageHistoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clients")
    public String clients;
    public GetNetworkClientsUsageHistoriesQueryParams withClients(String clients) {
        this.clients = clients;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetNetworkClientsUsageHistoriesQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetNetworkClientsUsageHistoriesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ssidNumber")
    public Long ssidNumber;
    public GetNetworkClientsUsageHistoriesQueryParams withSsidNumber(Long ssidNumber) {
        this.ssidNumber = ssidNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetNetworkClientsUsageHistoriesQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetNetworkClientsUsageHistoriesQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetNetworkClientsUsageHistoriesQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetNetworkClientsUsageHistoriesQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}