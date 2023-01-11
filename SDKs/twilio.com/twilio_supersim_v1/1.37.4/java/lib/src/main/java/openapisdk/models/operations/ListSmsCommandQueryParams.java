package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSmsCommandQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Direction")
    public openapisdk.models.shared.SmsCommandEnumDirectionEnum direction;
    public ListSmsCommandQueryParams withDirection(openapisdk.models.shared.SmsCommandEnumDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSmsCommandQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Sim")
    public String sim;
    public ListSmsCommandQueryParams withSim(String sim) {
        this.sim = sim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.SmsCommandEnumStatusEnum status;
    public ListSmsCommandQueryParams withStatus(openapisdk.models.shared.SmsCommandEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}