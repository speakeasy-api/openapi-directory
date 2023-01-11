package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListShipmentRatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at_start")
    public OffsetDateTime createdAtStart;
    public ListShipmentRatesQueryParams withCreatedAtStart(OffsetDateTime createdAtStart) {
        this.createdAtStart = createdAtStart;
        return this;
    }
}