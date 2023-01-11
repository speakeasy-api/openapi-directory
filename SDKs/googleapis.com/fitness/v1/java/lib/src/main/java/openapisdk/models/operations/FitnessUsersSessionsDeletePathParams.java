package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FitnessUsersSessionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sessionId")
    public String sessionId;
    public FitnessUsersSessionsDeletePathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public FitnessUsersSessionsDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}