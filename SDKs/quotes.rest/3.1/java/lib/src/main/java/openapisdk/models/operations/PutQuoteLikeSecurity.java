package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutQuoteLikeSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeXTheySaidSoApiSecret xTheySaidSoApiSecret;
    public PutQuoteLikeSecurity withXTheySaidSoApiSecret(openapisdk.models.shared.SchemeXTheySaidSoApiSecret xTheySaidSoApiSecret) {
        this.xTheySaidSoApiSecret = xTheySaidSoApiSecret;
        return this;
    }
}