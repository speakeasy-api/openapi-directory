package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferLicensesRequestBody {
    @SpeakeasyMetadata("form:name=sourceLicenseeNumber")
    public String sourceLicenseeNumber;
    public TransferLicensesRequestBody withSourceLicenseeNumber(String sourceLicenseeNumber) {
        this.sourceLicenseeNumber = sourceLicenseeNumber;
        return this;
    }
}