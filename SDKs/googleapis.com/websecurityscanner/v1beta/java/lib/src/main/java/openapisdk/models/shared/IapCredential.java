package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IapCredential
 * Describes authentication configuration for Identity-Aware-Proxy (IAP).
**/
public class IapCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iapTestServiceAccountInfo")
    public IapTestServiceAccountInfo iapTestServiceAccountInfo;
    public IapCredential withIapTestServiceAccountInfo(IapTestServiceAccountInfo iapTestServiceAccountInfo) {
        this.iapTestServiceAccountInfo = iapTestServiceAccountInfo;
        return this;
    }
}