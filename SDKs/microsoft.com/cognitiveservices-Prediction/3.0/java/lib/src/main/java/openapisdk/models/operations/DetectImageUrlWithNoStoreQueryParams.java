package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageUrlWithNoStoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public DetectImageUrlWithNoStoreQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
}