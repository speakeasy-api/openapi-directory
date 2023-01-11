package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNetworkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IsoCountry")
    public String isoCountry;
    public ListNetworkQueryParams withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Mcc")
    public String mcc;
    public ListNetworkQueryParams withMcc(String mcc) {
        this.mcc = mcc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Mnc")
    public String mnc;
    public ListNetworkQueryParams withMnc(String mnc) {
        this.mnc = mnc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListNetworkQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}