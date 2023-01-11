package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQshowQuotesAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public PostQshowQuotesAddQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quoteid")
    public String quoteid;
    public PostQshowQuotesAddQueryParams withQuoteid(String quoteid) {
        this.quoteid = quoteid;
        return this;
    }
}