package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecretVolume
 * Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container.
**/
public class SecretVolume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPath")
    public String mountPath;
    public SecretVolume withMountPath(String mountPath) {
        this.mountPath = mountPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public SecretVolume withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SecretVolume withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versions")
    public SecretVersion[] versions;
    public SecretVolume withVersions(SecretVersion[] versions) {
        this.versions = versions;
        return this;
    }
}