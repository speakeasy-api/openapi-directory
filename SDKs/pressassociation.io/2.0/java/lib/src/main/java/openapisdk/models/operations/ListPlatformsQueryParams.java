package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPlatformsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public ListPlatformsQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
}