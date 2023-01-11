package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSetupV1LocationsIdDeleteallimagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uppercase")
    public Boolean uppercase;
    public DeleteSetupV1LocationsIdDeleteallimagesQueryParams withUppercase(Boolean uppercase) {
        this.uppercase = uppercase;
        return this;
    }
}