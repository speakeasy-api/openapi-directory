package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementOciConfig
 * OCI repo configuration for a single cluster
**/
public class ConfigManagementOciConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpServiceAccountEmail")
    public String gcpServiceAccountEmail;
    public ConfigManagementOciConfig withGcpServiceAccountEmail(String gcpServiceAccountEmail) {
        this.gcpServiceAccountEmail = gcpServiceAccountEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyDir")
    public String policyDir;
    public ConfigManagementOciConfig withPolicyDir(String policyDir) {
        this.policyDir = policyDir;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretType")
    public String secretType;
    public ConfigManagementOciConfig withSecretType(String secretType) {
        this.secretType = secretType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncRepo")
    public String syncRepo;
    public ConfigManagementOciConfig withSyncRepo(String syncRepo) {
        this.syncRepo = syncRepo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncWaitSecs")
    public String syncWaitSecs;
    public ConfigManagementOciConfig withSyncWaitSecs(String syncWaitSecs) {
        this.syncWaitSecs = syncWaitSecs;
        return this;
    }
}