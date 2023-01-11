package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchDeploymentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OsconfigProjectsPatchDeploymentsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}