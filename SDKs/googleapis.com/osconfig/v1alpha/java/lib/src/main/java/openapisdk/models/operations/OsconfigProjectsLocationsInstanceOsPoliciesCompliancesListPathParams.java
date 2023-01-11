package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}