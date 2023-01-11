package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionIdDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=session_id")
    public String sessionId;
    public SessionIdDeletePathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}