package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CrawlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;
    public CrawlPathParams withQuery(String query) {
        this.query = query;
        return this;
    }
}