package openapisdk.models.operations;



public class EnterpriseAdminGetPreReceiveHookForRepoResponse {
    public String contentType;
    public EnterpriseAdminGetPreReceiveHookForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetPreReceiveHookForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RepositoryPreReceiveHook repositoryPreReceiveHook;
    public EnterpriseAdminGetPreReceiveHookForRepoResponse withRepositoryPreReceiveHook(openapisdk.models.shared.RepositoryPreReceiveHook repositoryPreReceiveHook) {
        this.repositoryPreReceiveHook = repositoryPreReceiveHook;
        return this;
    }
}