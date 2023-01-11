package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public GetChannelQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
}