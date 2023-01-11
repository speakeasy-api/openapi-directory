package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClientClientIdTokenKindPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public GetClientClientIdTokenKindPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=kind")
    public GetClientClientIdTokenKindKindEnum kind;
    public GetClientClientIdTokenKindPathParams withKind(GetClientClientIdTokenKindKindEnum kind) {
        this.kind = kind;
        return this;
    }
}