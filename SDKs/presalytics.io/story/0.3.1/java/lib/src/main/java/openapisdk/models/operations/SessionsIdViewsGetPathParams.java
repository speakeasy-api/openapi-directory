package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionsIdViewsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=session_id")
    public String sessionId;
    public SessionsIdViewsGetPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}