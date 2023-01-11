package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpgradeRuntimeRequest
 * Request for upgrading a Managed Notebook Runtime to the latest version. option (google.api.message_visibility).restriction = "TRUSTED_TESTER,SPECIAL_TESTER";
**/
public class UpgradeRuntimeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public UpgradeRuntimeRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}