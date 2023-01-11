package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContributorListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public GetContributorListQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
}