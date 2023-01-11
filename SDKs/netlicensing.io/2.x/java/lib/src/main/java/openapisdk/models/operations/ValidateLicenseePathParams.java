package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateLicenseePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseeNumber")
    public String licenseeNumber;
    public ValidateLicenseePathParams withLicenseeNumber(String licenseeNumber) {
        this.licenseeNumber = licenseeNumber;
        return this;
    }
}