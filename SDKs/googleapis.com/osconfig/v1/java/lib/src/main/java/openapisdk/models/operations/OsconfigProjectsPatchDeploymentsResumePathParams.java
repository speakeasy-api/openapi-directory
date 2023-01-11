package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchDeploymentsResumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OsconfigProjectsPatchDeploymentsResumePathParams withName(String name) {
        this.name = name;
        return this;
    }
}