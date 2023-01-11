package openapisdk.models.operations;



public class AndroidpublisherEditsExpansionfilesUpdateResponse {
    public String contentType;
    public AndroidpublisherEditsExpansionfilesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExpansionFile expansionFile;
    public AndroidpublisherEditsExpansionfilesUpdateResponse withExpansionFile(openapisdk.models.shared.ExpansionFile expansionFile) {
        this.expansionFile = expansionFile;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsExpansionfilesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}