package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HashtagStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tags")
    public Object[] tags;
    public HashtagStatsQueryParams withTags(Object[] tags) {
        this.tags = tags;
        return this;
    }
}