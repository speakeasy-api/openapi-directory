package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseeRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public CreateLicenseeRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=markedForTransfer")
    public Boolean markedForTransfer;
    public CreateLicenseeRequestBody withMarkedForTransfer(Boolean markedForTransfer) {
        this.markedForTransfer = markedForTransfer;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public CreateLicenseeRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public CreateLicenseeRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=productNumber")
    public String productNumber;
    public CreateLicenseeRequestBody withProductNumber(String productNumber) {
        this.productNumber = productNumber;
        return this;
    }
}