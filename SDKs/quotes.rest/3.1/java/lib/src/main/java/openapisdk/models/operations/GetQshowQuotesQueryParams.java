package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQshowQuotesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetQshowQuotesQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}