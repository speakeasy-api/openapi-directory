package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcegroupsIdRecoverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSetupV1ResourcegroupsIdRecoverPathParams withId(String id) {
        this.id = id;
        return this;
    }
}