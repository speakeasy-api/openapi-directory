package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseeNumber")
    public String licenseeNumber;
    public UpdateLicenseePathParams withLicenseeNumber(String licenseeNumber) {
        this.licenseeNumber = licenseeNumber;
        return this;
    }
}