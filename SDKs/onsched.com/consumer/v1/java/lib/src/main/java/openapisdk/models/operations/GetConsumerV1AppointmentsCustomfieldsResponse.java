package openapisdk.models.operations;



public class GetConsumerV1AppointmentsCustomfieldsResponse {
    public String contentType;
    public GetConsumerV1AppointmentsCustomfieldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomFieldDefinitionListViewModel customFieldDefinitionListViewModel;
    public GetConsumerV1AppointmentsCustomfieldsResponse withCustomFieldDefinitionListViewModel(openapisdk.models.shared.CustomFieldDefinitionListViewModel customFieldDefinitionListViewModel) {
        this.customFieldDefinitionListViewModel = customFieldDefinitionListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1AppointmentsCustomfieldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}