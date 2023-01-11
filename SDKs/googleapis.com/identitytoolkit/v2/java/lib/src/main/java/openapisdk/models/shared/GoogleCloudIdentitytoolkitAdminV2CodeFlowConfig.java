package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig
 * Additional config for Apple for code flow.
**/
public class GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyId")
    public String keyId;
    public GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKey")
    public String privateKey;
    public GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamId")
    public String teamId;
    public GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
}