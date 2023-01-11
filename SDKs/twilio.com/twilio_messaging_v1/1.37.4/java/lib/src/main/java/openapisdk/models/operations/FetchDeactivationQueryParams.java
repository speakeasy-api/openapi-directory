package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class FetchDeactivationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Date")
    public LocalDate date;
    public FetchDeactivationQueryParams withDate(LocalDate date) {
        this.date = date;
        return this;
    }
}