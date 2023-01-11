package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferLicensesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseeNumber")
    public String licenseeNumber;
    public TransferLicensesPathParams withLicenseeNumber(String licenseeNumber) {
        this.licenseeNumber = licenseeNumber;
        return this;
    }
}