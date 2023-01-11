package openapisdk.models.operations;



public class AndroidpublisherEditsExpansionfilesPatchResponse {
    public String contentType;
    public AndroidpublisherEditsExpansionfilesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExpansionFile expansionFile;
    public AndroidpublisherEditsExpansionfilesPatchResponse withExpansionFile(openapisdk.models.shared.ExpansionFile expansionFile) {
        this.expansionFile = expansionFile;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsExpansionfilesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}