package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MacVerifyResponse
 * Response message for KeyManagementService.MacVerify.
**/
public class MacVerifyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MacVerifyResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public MacVerifyResponseProtectionLevelEnum protectionLevel;
    public MacVerifyResponse withProtectionLevel(MacVerifyResponseProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public MacVerifyResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedDataCrc32c")
    public Boolean verifiedDataCrc32c;
    public MacVerifyResponse withVerifiedDataCrc32c(Boolean verifiedDataCrc32c) {
        this.verifiedDataCrc32c = verifiedDataCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedMacCrc32c")
    public Boolean verifiedMacCrc32c;
    public MacVerifyResponse withVerifiedMacCrc32c(Boolean verifiedMacCrc32c) {
        this.verifiedMacCrc32c = verifiedMacCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedSuccessIntegrity")
    public Boolean verifiedSuccessIntegrity;
    public MacVerifyResponse withVerifiedSuccessIntegrity(Boolean verifiedSuccessIntegrity) {
        this.verifiedSuccessIntegrity = verifiedSuccessIntegrity;
        return this;
    }
}