package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListFundingAuditDeltasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListFundingAuditDeltasQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public ListFundingAuditDeltasQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public ListFundingAuditDeltasQueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedSince")
    public OffsetDateTime updatedSince;
    public ListFundingAuditDeltasQueryParams withUpdatedSince(OffsetDateTime updatedSince) {
        this.updatedSince = updatedSince;
        return this;
    }
}