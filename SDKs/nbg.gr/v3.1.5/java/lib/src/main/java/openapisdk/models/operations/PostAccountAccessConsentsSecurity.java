package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountAccessConsentsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeClientCredentialsToken clientCredentialsToken;
    public PostAccountAccessConsentsSecurity withClientCredentialsToken(openapisdk.models.shared.SchemeClientCredentialsToken clientCredentialsToken) {
        this.clientCredentialsToken = clientCredentialsToken;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeClientId clientId;
    public PostAccountAccessConsentsSecurity withClientId(openapisdk.models.shared.SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
}