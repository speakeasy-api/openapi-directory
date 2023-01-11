package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIpCommandQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Direction")
    public openapisdk.models.shared.IpCommandEnumDirectionEnum direction;
    public ListIpCommandQueryParams withDirection(openapisdk.models.shared.IpCommandEnumDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListIpCommandQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Sim")
    public String sim;
    public ListIpCommandQueryParams withSim(String sim) {
        this.sim = sim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SimIccid")
    public String simIccid;
    public ListIpCommandQueryParams withSimIccid(String simIccid) {
        this.simIccid = simIccid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.IpCommandEnumStatusEnum status;
    public ListIpCommandQueryParams withStatus(openapisdk.models.shared.IpCommandEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}