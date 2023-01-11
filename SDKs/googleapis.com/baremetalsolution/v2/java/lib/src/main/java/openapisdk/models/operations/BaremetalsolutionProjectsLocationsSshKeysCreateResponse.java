package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsSshKeysCreateResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsSshKeysCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SshKey sshKey;
    public BaremetalsolutionProjectsLocationsSshKeysCreateResponse withSshKey(openapisdk.models.shared.SshKey sshKey) {
        this.sshKey = sshKey;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsSshKeysCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}