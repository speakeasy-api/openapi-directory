package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostTargetsTargetIdSiteVerifyRequestBody {
    @JsonProperty("type")
    public openapisdk.models.shared.VerificationTypeEnum type;
    public PostTargetsTargetIdSiteVerifyRequestBody withType(openapisdk.models.shared.VerificationTypeEnum type) {
        this.type = type;
        return this;
    }
}