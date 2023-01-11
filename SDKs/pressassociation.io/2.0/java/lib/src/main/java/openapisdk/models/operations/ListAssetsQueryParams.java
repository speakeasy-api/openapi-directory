package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public ListAssetsQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public ListAssetsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAfter")
    public String updatedAfter;
    public ListAssetsQueryParams withUpdatedAfter(String updatedAfter) {
        this.updatedAfter = updatedAfter;
        return this;
    }
}