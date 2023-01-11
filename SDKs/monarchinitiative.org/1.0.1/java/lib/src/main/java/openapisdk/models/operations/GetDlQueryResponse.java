package openapisdk.models.operations;



public class GetDlQueryResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetDlQueryResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetDlQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDlQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}