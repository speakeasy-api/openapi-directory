package openapisdk.models.operations;



public class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse {
    public String contentType;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> unavailableTimeListViewModel;
    public GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse withUnavailableTimeListViewModel(java.util.Map<String, Object> unavailableTimeListViewModel) {
        this.unavailableTimeListViewModel = unavailableTimeListViewModel;
        return this;
    }
}