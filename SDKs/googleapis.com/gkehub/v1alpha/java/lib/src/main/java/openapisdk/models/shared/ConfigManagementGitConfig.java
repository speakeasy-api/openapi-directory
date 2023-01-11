package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementGitConfig
 * Git repo configuration for a single cluster.
**/
public class ConfigManagementGitConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpServiceAccountEmail")
    public String gcpServiceAccountEmail;
    public ConfigManagementGitConfig withGcpServiceAccountEmail(String gcpServiceAccountEmail) {
        this.gcpServiceAccountEmail = gcpServiceAccountEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpsProxy")
    public String httpsProxy;
    public ConfigManagementGitConfig withHttpsProxy(String httpsProxy) {
        this.httpsProxy = httpsProxy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyDir")
    public String policyDir;
    public ConfigManagementGitConfig withPolicyDir(String policyDir) {
        this.policyDir = policyDir;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretType")
    public String secretType;
    public ConfigManagementGitConfig withSecretType(String secretType) {
        this.secretType = secretType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncBranch")
    public String syncBranch;
    public ConfigManagementGitConfig withSyncBranch(String syncBranch) {
        this.syncBranch = syncBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncRepo")
    public String syncRepo;
    public ConfigManagementGitConfig withSyncRepo(String syncRepo) {
        this.syncRepo = syncRepo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncRev")
    public String syncRev;
    public ConfigManagementGitConfig withSyncRev(String syncRev) {
        this.syncRev = syncRev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncWaitSecs")
    public String syncWaitSecs;
    public ConfigManagementGitConfig withSyncWaitSecs(String syncWaitSecs) {
        this.syncWaitSecs = syncWaitSecs;
        return this;
    }
}