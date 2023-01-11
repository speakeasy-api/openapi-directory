package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}