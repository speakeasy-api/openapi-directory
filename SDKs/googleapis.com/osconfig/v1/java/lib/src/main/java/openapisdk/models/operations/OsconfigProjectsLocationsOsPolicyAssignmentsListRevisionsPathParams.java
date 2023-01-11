package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}