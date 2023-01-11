package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=endDate")
    public OffsetDateTime endDate;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=startDate")
    public OffsetDateTime startDate;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
}