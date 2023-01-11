package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ResourcesIdBlocksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public OffsetDateTime endDate;
    public GetSetupV1ResourcesIdBlocksQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetSetupV1ResourcesIdBlocksQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetSetupV1ResourcesIdBlocksQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public OffsetDateTime startDate;
    public GetSetupV1ResourcesIdBlocksQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
}