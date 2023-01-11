package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=session_id")
    public String sessionId;
    public SessionIdGetPathParams withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}