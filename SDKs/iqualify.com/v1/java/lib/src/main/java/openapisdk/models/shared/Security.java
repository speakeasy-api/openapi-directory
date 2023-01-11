package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeAuthorization authorization;
    public Security withAuthorization(SchemeAuthorization authorization) {
        this.authorization = authorization;
        return this;
    }
}