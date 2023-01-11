package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
}