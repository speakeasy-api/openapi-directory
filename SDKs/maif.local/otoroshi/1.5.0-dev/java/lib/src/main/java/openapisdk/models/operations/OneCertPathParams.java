package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OneCertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OneCertPathParams withId(String id) {
        this.id = id;
        return this;
    }
}