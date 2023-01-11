package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionsIdViewsPostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=session_id")
    public String sessionId;
    public SessionsIdViewsPostPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}