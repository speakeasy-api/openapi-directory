package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCommandQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Direction")
    public openapisdk.models.shared.CommandEnumDirectionEnum direction;
    public ListCommandQueryParams withDirection(openapisdk.models.shared.CommandEnumDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCommandQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Sim")
    public String sim;
    public ListCommandQueryParams withSim(String sim) {
        this.sim = sim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.CommandEnumStatusEnum status;
    public ListCommandQueryParams withStatus(openapisdk.models.shared.CommandEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Transport")
    public openapisdk.models.shared.CommandEnumTransportEnum transport;
    public ListCommandQueryParams withTransport(openapisdk.models.shared.CommandEnumTransportEnum transport) {
        this.transport = transport;
        return this;
    }
}