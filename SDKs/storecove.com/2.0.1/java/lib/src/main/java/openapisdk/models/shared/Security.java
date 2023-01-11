package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeBearer bearer;
    public Security withBearer(SchemeBearer bearer) {
        this.bearer = bearer;
        return this;
    }
}