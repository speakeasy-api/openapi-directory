package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeTokenAuthentication tokenAuthentication;
    public Security withTokenAuthentication(SchemeTokenAuthentication tokenAuthentication) {
        this.tokenAuthentication = tokenAuthentication;
        return this;
    }
}