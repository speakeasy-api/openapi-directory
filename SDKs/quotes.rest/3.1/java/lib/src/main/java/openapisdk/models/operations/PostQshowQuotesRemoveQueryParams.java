package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQshowQuotesRemoveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public PostQshowQuotesRemoveQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quoteid")
    public String quoteid;
    public PostQshowQuotesRemoveQueryParams withQuoteid(String quoteid) {
        this.quoteid = quoteid;
        return this;
    }
}