package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOauth2TokenSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeClientId clientId;
    public PostOauth2TokenSecurity withClientId(openapisdk.models.shared.SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
}