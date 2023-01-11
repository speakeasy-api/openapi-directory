package openapisdk.models.operations;



public class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse {
    public String contentType;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WindowAvailabilityViewModel windowAvailabilityViewModel;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse withWindowAvailabilityViewModel(openapisdk.models.shared.WindowAvailabilityViewModel windowAvailabilityViewModel) {
        this.windowAvailabilityViewModel = windowAvailabilityViewModel;
        return this;
    }
}