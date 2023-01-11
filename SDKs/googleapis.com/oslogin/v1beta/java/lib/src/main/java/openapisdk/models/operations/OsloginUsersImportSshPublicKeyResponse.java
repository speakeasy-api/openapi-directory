package openapisdk.models.operations;



public class OsloginUsersImportSshPublicKeyResponse {
    public String contentType;
    public OsloginUsersImportSshPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportSshPublicKeyResponse importSshPublicKeyResponse;
    public OsloginUsersImportSshPublicKeyResponse withImportSshPublicKeyResponse(openapisdk.models.shared.ImportSshPublicKeyResponse importSshPublicKeyResponse) {
        this.importSshPublicKeyResponse = importSshPublicKeyResponse;
        return this;
    }
    public Long statusCode;
    public OsloginUsersImportSshPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}