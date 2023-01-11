package openapisdk.models.operations;



public class VaultMattersAddPermissionsResponse {
    public String contentType;
    public VaultMattersAddPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MatterPermission matterPermission;
    public VaultMattersAddPermissionsResponse withMatterPermission(openapisdk.models.shared.MatterPermission matterPermission) {
        this.matterPermission = matterPermission;
        return this;
    }
    public Long statusCode;
    public VaultMattersAddPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}