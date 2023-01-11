package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SentimentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public SentimentQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
}