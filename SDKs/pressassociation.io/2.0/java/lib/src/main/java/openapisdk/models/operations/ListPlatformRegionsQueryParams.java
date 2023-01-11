package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPlatformRegionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public ListPlatformRegionsQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
}