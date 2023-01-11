package openapisdk.models.operations;



public class AndroidpublisherEditsDeobfuscationfilesUploadResponse {
    public String contentType;
    public AndroidpublisherEditsDeobfuscationfilesUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeobfuscationFilesUploadResponse deobfuscationFilesUploadResponse;
    public AndroidpublisherEditsDeobfuscationfilesUploadResponse withDeobfuscationFilesUploadResponse(openapisdk.models.shared.DeobfuscationFilesUploadResponse deobfuscationFilesUploadResponse) {
        this.deobfuscationFilesUploadResponse = deobfuscationFilesUploadResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsDeobfuscationfilesUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}