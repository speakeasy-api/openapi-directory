package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmotionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public EmotionQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
}