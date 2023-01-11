package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeDeveloperKey developerKey;
    public DeleteAssetSecurity withDeveloperKey(openapisdk.models.shared.SchemeDeveloperKey developerKey) {
        this.developerKey = developerKey;
        return this;
    }
}