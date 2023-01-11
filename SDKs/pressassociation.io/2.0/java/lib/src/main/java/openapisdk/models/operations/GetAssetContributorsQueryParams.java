package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetContributorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public GetAssetContributorsQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
}