package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=endDate")
    public OffsetDateTime endDate;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=startDate")
    public OffsetDateTime startDate;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
}