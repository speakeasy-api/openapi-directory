package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudSqlConnectionProfile
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
**/
public class CloudSqlConnectionProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSqlId")
    public String cloudSqlId;
    public CloudSqlConnectionProfile withCloudSqlId(String cloudSqlId) {
        this.cloudSqlId = cloudSqlId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateIp")
    public String privateIp;
    public CloudSqlConnectionProfile withPrivateIp(String privateIp) {
        this.privateIp = privateIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicIp")
    public String publicIp;
    public CloudSqlConnectionProfile withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CloudSqlSettings settings;
    public CloudSqlConnectionProfile withSettings(CloudSqlSettings settings) {
        this.settings = settings;
        return this;
    }
}