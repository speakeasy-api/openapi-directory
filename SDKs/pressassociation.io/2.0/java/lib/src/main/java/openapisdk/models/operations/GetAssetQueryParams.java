package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public GetAssetQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
}