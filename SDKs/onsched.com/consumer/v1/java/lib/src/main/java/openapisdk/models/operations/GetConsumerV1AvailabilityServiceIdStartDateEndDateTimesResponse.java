package openapisdk.models.operations;



public class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse {
    public openapisdk.models.shared.Availability3ViewModel availability3ViewModel;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse withAvailability3ViewModel(openapisdk.models.shared.Availability3ViewModel availability3ViewModel) {
        this.availability3ViewModel = availability3ViewModel;
        return this;
    }
    public String contentType;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}