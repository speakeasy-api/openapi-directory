package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChallengeUpdateChallengeRequest {
    @SpeakeasyMetadata("form:name=AuthPayload")
    public String authPayload;
    public UpdateChallengeUpdateChallengeRequest withAuthPayload(String authPayload) {
        this.authPayload = authPayload;
        return this;
    }
    @SpeakeasyMetadata("form:name=Metadata")
    public Object metadata;
    public UpdateChallengeUpdateChallengeRequest withMetadata(Object metadata) {
        this.metadata = metadata;
        return this;
    }
}