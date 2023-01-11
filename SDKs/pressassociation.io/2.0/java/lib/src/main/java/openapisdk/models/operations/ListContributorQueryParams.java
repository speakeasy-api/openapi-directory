package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContributorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public ListContributorQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public ListContributorQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAfter")
    public String updatedAfter;
    public ListContributorQueryParams withUpdatedAfter(String updatedAfter) {
        this.updatedAfter = updatedAfter;
        return this;
    }
}