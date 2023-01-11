package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeConnectionsConnectionIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connection_id")
    public Long connectionId;
    public GetMeConnectionsConnectionIdPathParams withConnectionId(Long connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}