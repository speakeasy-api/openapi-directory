package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdScansRetrievePageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public LocalDate date;
    public GetTargetsTargetIdScansRetrievePageQueryParams withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public Long length;
    public GetTargetsTargetIdScansRetrievePageQueryParams withLength(Long length) {
        this.length = length;
        return this;
    }
}