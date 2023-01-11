package openapisdk.models.operations;



public class DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse {
    public String contentType;
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SshScript sshScript;
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse withSshScript(openapisdk.models.shared.SshScript sshScript) {
        this.sshScript = sshScript;
        return this;
    }
    public Long statusCode;
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}