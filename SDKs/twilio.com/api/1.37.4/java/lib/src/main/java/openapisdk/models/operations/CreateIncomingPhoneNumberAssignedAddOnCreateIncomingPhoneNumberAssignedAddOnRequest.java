package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest {
    @SpeakeasyMetadata("form:name=InstalledAddOnSid")
    public String installedAddOnSid;
    public CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest withInstalledAddOnSid(String installedAddOnSid) {
        this.installedAddOnSid = installedAddOnSid;
        return this;
    }
}