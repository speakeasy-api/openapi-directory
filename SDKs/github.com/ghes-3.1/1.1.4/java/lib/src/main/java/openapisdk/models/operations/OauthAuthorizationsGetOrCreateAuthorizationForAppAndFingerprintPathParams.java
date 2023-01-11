package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fingerprint")
    public String fingerprint;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
}