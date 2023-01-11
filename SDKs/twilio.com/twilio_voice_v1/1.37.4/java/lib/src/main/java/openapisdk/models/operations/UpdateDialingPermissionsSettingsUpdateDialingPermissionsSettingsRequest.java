package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest {
    @SpeakeasyMetadata("form:name=DialingPermissionsInheritance")
    public Boolean dialingPermissionsInheritance;
    public UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest withDialingPermissionsInheritance(Boolean dialingPermissionsInheritance) {
        this.dialingPermissionsInheritance = dialingPermissionsInheritance;
        return this;
    }
}