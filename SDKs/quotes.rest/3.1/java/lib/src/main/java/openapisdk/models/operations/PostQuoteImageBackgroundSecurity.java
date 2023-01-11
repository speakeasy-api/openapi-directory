package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteImageBackgroundSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeXTheySaidSoApiSecret xTheySaidSoApiSecret;
    public PostQuoteImageBackgroundSecurity withXTheySaidSoApiSecret(openapisdk.models.shared.SchemeXTheySaidSoApiSecret xTheySaidSoApiSecret) {
        this.xTheySaidSoApiSecret = xTheySaidSoApiSecret;
        return this;
    }
}