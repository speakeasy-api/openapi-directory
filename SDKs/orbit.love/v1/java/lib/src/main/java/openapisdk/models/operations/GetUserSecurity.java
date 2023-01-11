package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeBearer bearer;
    public GetUserSecurity withBearer(openapisdk.models.shared.SchemeBearer bearer) {
        this.bearer = bearer;
        return this;
    }
}