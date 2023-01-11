package openapisdk.models.operations;



public class FirebasehostingSitesVersionsPopulateFilesResponse {
    public String contentType;
    public FirebasehostingSitesVersionsPopulateFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PopulateVersionFilesResponse populateVersionFilesResponse;
    public FirebasehostingSitesVersionsPopulateFilesResponse withPopulateVersionFilesResponse(openapisdk.models.shared.PopulateVersionFilesResponse populateVersionFilesResponse) {
        this.populateVersionFilesResponse = populateVersionFilesResponse;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesVersionsPopulateFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}