package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseeRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public UpdateLicenseeRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=markedForTransfer")
    public Boolean markedForTransfer;
    public UpdateLicenseeRequestBody withMarkedForTransfer(Boolean markedForTransfer) {
        this.markedForTransfer = markedForTransfer;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public UpdateLicenseeRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public UpdateLicenseeRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
}