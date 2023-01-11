package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostTargetsTargetIdAssetsIdVerifyRequestBody {
    @JsonProperty("type")
    public openapisdk.models.shared.VerificationTypeEnum type;
    public PostTargetsTargetIdAssetsIdVerifyRequestBody withType(openapisdk.models.shared.VerificationTypeEnum type) {
        this.type = type;
        return this;
    }
}