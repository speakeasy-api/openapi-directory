package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudshellOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}