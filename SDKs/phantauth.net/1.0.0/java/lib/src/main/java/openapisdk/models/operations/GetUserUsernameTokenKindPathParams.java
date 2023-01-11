package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserUsernameTokenKindPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=kind")
    public GetUserUsernameTokenKindKindEnum kind;
    public GetUserUsernameTokenKindPathParams withKind(GetUserUsernameTokenKindKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetUserUsernameTokenKindPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}