package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}