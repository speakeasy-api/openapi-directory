package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantAnalyzePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVariantAnalyzePathParams withId(String id) {
        this.id = id;
        return this;
    }
}