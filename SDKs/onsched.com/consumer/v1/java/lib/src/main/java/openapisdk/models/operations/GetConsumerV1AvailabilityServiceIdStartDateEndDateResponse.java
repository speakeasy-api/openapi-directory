package openapisdk.models.operations;



public class GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse {
    public openapisdk.models.shared.AvailabilityViewModel availabilityViewModel;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse withAvailabilityViewModel(openapisdk.models.shared.AvailabilityViewModel availabilityViewModel) {
        this.availabilityViewModel = availabilityViewModel;
        return this;
    }
    public String contentType;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}