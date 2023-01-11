package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStatsIncrementFieldPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=field")
    public String field;
    public PostStatsIncrementFieldPathParams withField(String field) {
        this.field = field;
        return this;
    }
}