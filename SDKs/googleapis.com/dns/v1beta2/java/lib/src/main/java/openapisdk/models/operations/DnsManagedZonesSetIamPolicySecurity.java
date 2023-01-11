package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesSetIamPolicySecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsManagedZonesSetIamPolicySecurityOption1 option1;
    public DnsManagedZonesSetIamPolicySecurity withOption1(DnsManagedZonesSetIamPolicySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsManagedZonesSetIamPolicySecurityOption2 option2;
    public DnsManagedZonesSetIamPolicySecurity withOption2(DnsManagedZonesSetIamPolicySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}