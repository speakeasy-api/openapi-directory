package openapisdk.models.operations;



public class ListCustomDescriptorsRequest {
    public ListCustomDescriptorsQueryParams queryParams;
    public ListCustomDescriptorsRequest withQueryParams(ListCustomDescriptorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomDescriptorsSecurity security;
    public ListCustomDescriptorsRequest withSecurity(ListCustomDescriptorsSecurity security) {
        this.security = security;
        return this;
    }
}