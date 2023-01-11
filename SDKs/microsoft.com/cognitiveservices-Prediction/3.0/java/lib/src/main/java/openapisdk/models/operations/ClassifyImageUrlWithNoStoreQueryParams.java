package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImageUrlWithNoStoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public ClassifyImageUrlWithNoStoreQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
}