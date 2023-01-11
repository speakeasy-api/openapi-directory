package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsGetIdForEmailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=email")
    public String email;
    public DrivePermissionsGetIdForEmailPathParams withEmail(String email) {
        this.email = email;
        return this;
    }
}