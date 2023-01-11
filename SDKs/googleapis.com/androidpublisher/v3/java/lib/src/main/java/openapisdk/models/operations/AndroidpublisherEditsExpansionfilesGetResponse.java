package openapisdk.models.operations;



public class AndroidpublisherEditsExpansionfilesGetResponse {
    public String contentType;
    public AndroidpublisherEditsExpansionfilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExpansionFile expansionFile;
    public AndroidpublisherEditsExpansionfilesGetResponse withExpansionFile(openapisdk.models.shared.ExpansionFile expansionFile) {
        this.expansionFile = expansionFile;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsExpansionfilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}