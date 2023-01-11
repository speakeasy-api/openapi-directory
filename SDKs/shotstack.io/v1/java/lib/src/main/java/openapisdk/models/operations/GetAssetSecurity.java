package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeDeveloperKey developerKey;
    public GetAssetSecurity withDeveloperKey(openapisdk.models.shared.SchemeDeveloperKey developerKey) {
        this.developerKey = developerKey;
        return this;
    }
}