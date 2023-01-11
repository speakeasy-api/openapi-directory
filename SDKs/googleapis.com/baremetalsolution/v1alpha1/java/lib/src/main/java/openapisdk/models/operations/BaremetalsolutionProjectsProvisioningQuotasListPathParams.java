package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsProvisioningQuotasListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BaremetalsolutionProjectsProvisioningQuotasListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}