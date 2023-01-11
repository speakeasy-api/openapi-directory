package openapisdk.models.operations;



public class EchoRequest {
    public EchoQueryParams queryParams;
    public EchoRequest withQueryParams(EchoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}