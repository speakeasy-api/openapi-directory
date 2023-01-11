package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImageWithNoStoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public ClassifyImageWithNoStoreQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
}