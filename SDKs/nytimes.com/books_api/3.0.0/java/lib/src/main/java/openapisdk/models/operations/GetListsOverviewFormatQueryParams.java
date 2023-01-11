package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListsOverviewFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-key")
    public String apiKey;
    public GetListsOverviewFormatQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published_date")
    public String publishedDate;
    public GetListsOverviewFormatQueryParams withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
}