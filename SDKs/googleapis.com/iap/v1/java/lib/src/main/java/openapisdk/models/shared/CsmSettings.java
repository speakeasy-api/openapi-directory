package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsmSettings
 * Configuration for RCToken generated for service mesh workloads protected by IAP. RCToken are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for service mesh deployments, and can be scoped to a single mesh by configuring the audience field accordingly.
**/
public class CsmSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rctokenAud")
    public String rctokenAud;
    public CsmSettings withRctokenAud(String rctokenAud) {
        this.rctokenAud = rctokenAud;
        return this;
    }
}