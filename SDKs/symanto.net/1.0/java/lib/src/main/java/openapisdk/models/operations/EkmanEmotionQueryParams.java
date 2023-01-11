package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EkmanEmotionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public EkmanEmotionQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
}