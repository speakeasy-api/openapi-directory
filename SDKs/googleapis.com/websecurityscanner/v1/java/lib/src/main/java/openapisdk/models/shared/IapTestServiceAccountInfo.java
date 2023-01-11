package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IapTestServiceAccountInfo
 * Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.
**/
public class IapTestServiceAccountInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetAudienceClientId")
    public String targetAudienceClientId;
    public IapTestServiceAccountInfo withTargetAudienceClientId(String targetAudienceClientId) {
        this.targetAudienceClientId = targetAudienceClientId;
        return this;
    }
}