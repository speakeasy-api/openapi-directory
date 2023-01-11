package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesServicesReplaceServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RunNamespacesServicesReplaceServicePathParams withName(String name) {
        this.name = name;
        return this;
    }
}