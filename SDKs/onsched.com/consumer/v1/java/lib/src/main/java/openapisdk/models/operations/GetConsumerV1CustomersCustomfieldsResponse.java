package openapisdk.models.operations;



public class GetConsumerV1CustomersCustomfieldsResponse {
    public String contentType;
    public GetConsumerV1CustomersCustomfieldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomFieldDefinitionListViewModel customFieldDefinitionListViewModel;
    public GetConsumerV1CustomersCustomfieldsResponse withCustomFieldDefinitionListViewModel(openapisdk.models.shared.CustomFieldDefinitionListViewModel customFieldDefinitionListViewModel) {
        this.customFieldDefinitionListViewModel = customFieldDefinitionListViewModel;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersCustomfieldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}