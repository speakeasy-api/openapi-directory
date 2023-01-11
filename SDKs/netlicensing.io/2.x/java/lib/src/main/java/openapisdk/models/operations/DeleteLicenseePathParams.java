package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLicenseePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseeNumber")
    public String licenseeNumber;
    public DeleteLicenseePathParams withLicenseeNumber(String licenseeNumber) {
        this.licenseeNumber = licenseeNumber;
        return this;
    }
}