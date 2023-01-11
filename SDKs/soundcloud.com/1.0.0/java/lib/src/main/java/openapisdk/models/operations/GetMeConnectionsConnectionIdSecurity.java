package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeConnectionsConnectionIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeAuthHeader authHeader;
    public GetMeConnectionsConnectionIdSecurity withAuthHeader(openapisdk.models.shared.SchemeAuthHeader authHeader) {
        this.authHeader = authHeader;
        return this;
    }
}