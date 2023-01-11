package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageWithNoStoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public DetectImageWithNoStoreQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
}