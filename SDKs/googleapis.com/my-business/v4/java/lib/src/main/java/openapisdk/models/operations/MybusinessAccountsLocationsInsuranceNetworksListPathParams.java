package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsInsuranceNetworksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessAccountsLocationsInsuranceNetworksListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}