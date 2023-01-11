package openapisdk.models.operations;



public class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse {
    public openapisdk.models.shared.AvailabilityDayViewModel availabilityDayViewModel;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse withAvailabilityDayViewModel(openapisdk.models.shared.AvailabilityDayViewModel availabilityDayViewModel) {
        this.availabilityDayViewModel = availabilityDayViewModel;
        return this;
    }
    public String contentType;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}