package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public DetectImageQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
}