package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public DetectImageUrlQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
}