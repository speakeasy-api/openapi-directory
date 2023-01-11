package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsSshKeysListResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsSshKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSshKeysResponse listSSHKeysResponse;
    public BaremetalsolutionProjectsLocationsSshKeysListResponse withListSshKeysResponse(openapisdk.models.shared.ListSshKeysResponse listSSHKeysResponse) {
        this.listSSHKeysResponse = listSSHKeysResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsSshKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}