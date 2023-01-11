package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListPayeeChangesV4QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListPayeeChangesV4QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public ListPayeeChangesV4QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public ListPayeeChangesV4QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedSince")
    public OffsetDateTime updatedSince;
    public ListPayeeChangesV4QueryParams withUpdatedSince(OffsetDateTime updatedSince) {
        this.updatedSince = updatedSince;
        return this;
    }
}