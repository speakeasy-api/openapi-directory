package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchCertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchCertPathParams withId(String id) {
        this.id = id;
        return this;
    }
}