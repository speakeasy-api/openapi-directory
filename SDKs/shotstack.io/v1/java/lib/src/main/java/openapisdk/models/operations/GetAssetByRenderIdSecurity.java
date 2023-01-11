package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetByRenderIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeDeveloperKey developerKey;
    public GetAssetByRenderIdSecurity withDeveloperKey(openapisdk.models.shared.SchemeDeveloperKey developerKey) {
        this.developerKey = developerKey;
        return this;
    }
}