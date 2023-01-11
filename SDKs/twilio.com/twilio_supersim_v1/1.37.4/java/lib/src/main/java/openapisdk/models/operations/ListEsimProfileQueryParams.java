package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEsimProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Eid")
    public String eid;
    public ListEsimProfileQueryParams withEid(String eid) {
        this.eid = eid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListEsimProfileQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SimSid")
    public String simSid;
    public ListEsimProfileQueryParams withSimSid(String simSid) {
        this.simSid = simSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.EsimProfileEnumStatusEnum status;
    public ListEsimProfileQueryParams withStatus(openapisdk.models.shared.EsimProfileEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}