package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSmDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetNetworkSmDevicesQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public String[] fields;
    public GetNetworkSmDevicesQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public String[] ids;
    public GetNetworkSmDevicesQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetNetworkSmDevicesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=scope")
    public String[] scope;
    public GetNetworkSmDevicesQueryParams withScope(String[] scope) {
        this.scope = scope;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=serials")
    public String[] serials;
    public GetNetworkSmDevicesQueryParams withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetNetworkSmDevicesQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=wifiMacs")
    public String[] wifiMacs;
    public GetNetworkSmDevicesQueryParams withWifiMacs(String[] wifiMacs) {
        this.wifiMacs = wifiMacs;
        return this;
    }
}