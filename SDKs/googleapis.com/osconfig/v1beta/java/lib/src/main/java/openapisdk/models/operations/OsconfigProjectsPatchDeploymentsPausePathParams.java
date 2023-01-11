package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchDeploymentsPausePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OsconfigProjectsPatchDeploymentsPausePathParams withName(String name) {
        this.name = name;
        return this;
    }
}