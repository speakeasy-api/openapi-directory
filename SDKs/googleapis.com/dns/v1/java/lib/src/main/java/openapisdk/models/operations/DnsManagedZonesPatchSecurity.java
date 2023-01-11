package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsManagedZonesPatchSecurityOption1 option1;
    public DnsManagedZonesPatchSecurity withOption1(DnsManagedZonesPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsManagedZonesPatchSecurityOption2 option2;
    public DnsManagedZonesPatchSecurity withOption2(DnsManagedZonesPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}