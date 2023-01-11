package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContributorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public GetContributorQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
}