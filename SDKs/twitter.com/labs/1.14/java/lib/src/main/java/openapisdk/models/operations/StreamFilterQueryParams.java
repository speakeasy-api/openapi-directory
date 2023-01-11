package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StreamFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expansions")
    public openapisdk.models.shared.TweetExpansionsParamTypeEnum[][] expansions;
    public StreamFilterQueryParams withExpansions(openapisdk.models.shared.TweetExpansionsParamTypeEnum[][] expansions) {
        this.expansions = expansions;
        return this;
    }
}