package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQuoteLikeSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeXTheySaidSoApiSecret xTheySaidSoApiSecret;
    public DeleteQuoteLikeSecurity withXTheySaidSoApiSecret(openapisdk.models.shared.SchemeXTheySaidSoApiSecret xTheySaidSoApiSecret) {
        this.xTheySaidSoApiSecret = xTheySaidSoApiSecret;
        return this;
    }
}