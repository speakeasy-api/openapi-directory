package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}