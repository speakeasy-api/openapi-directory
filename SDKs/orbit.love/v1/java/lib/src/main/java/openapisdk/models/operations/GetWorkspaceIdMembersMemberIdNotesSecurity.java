package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceIdMembersMemberIdNotesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeBearer bearer;
    public GetWorkspaceIdMembersMemberIdNotesSecurity withBearer(openapisdk.models.shared.SchemeBearer bearer) {
        this.bearer = bearer;
        return this;
    }
}