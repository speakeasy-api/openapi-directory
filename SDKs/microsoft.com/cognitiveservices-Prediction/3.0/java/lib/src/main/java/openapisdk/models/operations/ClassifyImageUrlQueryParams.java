package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImageUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public ClassifyImageUrlQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
}