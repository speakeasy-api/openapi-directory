package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsManagedZonesDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DnsManagedZonesDeleteSecurityOption1 option1;
    public DnsManagedZonesDeleteSecurity withOption1(DnsManagedZonesDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DnsManagedZonesDeleteSecurityOption2 option2;
    public DnsManagedZonesDeleteSecurity withOption2(DnsManagedZonesDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}