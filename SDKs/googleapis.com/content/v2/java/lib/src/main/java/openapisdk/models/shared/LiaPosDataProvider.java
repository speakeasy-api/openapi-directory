package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiaPosDataProvider {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posDataProviderId")
    public String posDataProviderId;
    public LiaPosDataProvider withPosDataProviderId(String posDataProviderId) {
        this.posDataProviderId = posDataProviderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posExternalAccountId")
    public String posExternalAccountId;
    public LiaPosDataProvider withPosExternalAccountId(String posExternalAccountId) {
        this.posExternalAccountId = posExternalAccountId;
        return this;
    }
}