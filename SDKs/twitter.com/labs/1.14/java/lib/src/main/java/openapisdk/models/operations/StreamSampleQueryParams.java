package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StreamSampleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expansions")
    public openapisdk.models.shared.TweetExpansionsParamTypeEnum[][] expansions;
    public StreamSampleQueryParams withExpansions(openapisdk.models.shared.TweetExpansionsParamTypeEnum[][] expansions) {
        this.expansions = expansions;
        return this;
    }
}