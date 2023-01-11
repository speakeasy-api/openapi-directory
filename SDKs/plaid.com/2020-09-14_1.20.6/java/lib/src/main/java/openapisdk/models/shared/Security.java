package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeClientId clientId;
    public Security withClientId(SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemePlaidVersion plaidVersion;
    public Security withPlaidVersion(SchemePlaidVersion plaidVersion) {
        this.plaidVersion = plaidVersion;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeSecret secret;
    public Security withSecret(SchemeSecret secret) {
        this.secret = secret;
        return this;
    }
}