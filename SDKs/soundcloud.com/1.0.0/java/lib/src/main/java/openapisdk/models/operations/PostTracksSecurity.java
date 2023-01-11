package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTracksSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeAuthHeader authHeader;
    public PostTracksSecurity withAuthHeader(openapisdk.models.shared.SchemeAuthHeader authHeader) {
        this.authHeader = authHeader;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeClientId clientId;
    public PostTracksSecurity withClientId(openapisdk.models.shared.SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
}