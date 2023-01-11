package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsManagedZonesUpdateSecurityOption1 option1;
    public DnsManagedZonesUpdateSecurity withOption1(DnsManagedZonesUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsManagedZonesUpdateSecurityOption2 option2;
    public DnsManagedZonesUpdateSecurity withOption2(DnsManagedZonesUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}