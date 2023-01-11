package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSimQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Fleet")
    public String fleet;
    public ListSimQueryParams withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Iccid")
    public String iccid;
    public ListSimQueryParams withIccid(String iccid) {
        this.iccid = iccid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSimQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.SimEnumStatusEnum status;
    public ListSimQueryParams withStatus(openapisdk.models.shared.SimEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}