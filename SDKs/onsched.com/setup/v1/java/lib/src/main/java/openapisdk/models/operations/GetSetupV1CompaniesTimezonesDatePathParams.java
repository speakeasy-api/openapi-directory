package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1CompaniesTimezonesDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public OffsetDateTime date;
    public GetSetupV1CompaniesTimezonesDatePathParams withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
}