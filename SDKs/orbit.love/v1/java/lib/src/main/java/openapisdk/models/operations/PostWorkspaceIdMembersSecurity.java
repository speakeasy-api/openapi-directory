package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspaceIdMembersSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeBearer bearer;
    public PostWorkspaceIdMembersSecurity withBearer(openapisdk.models.shared.SchemeBearer bearer) {
        this.bearer = bearer;
        return this;
    }
}