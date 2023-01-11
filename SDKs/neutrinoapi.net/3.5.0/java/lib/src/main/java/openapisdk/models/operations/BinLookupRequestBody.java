package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinLookupRequestBody {
    @SpeakeasyMetadata("form:name=bin-number")
    public String binNumber;
    public BinLookupRequestBody withBinNumber(String binNumber) {
        this.binNumber = binNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=customer-ip")
    public String customerIp;
    public BinLookupRequestBody withCustomerIp(String customerIp) {
        this.customerIp = customerIp;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public BinLookupRequestBodyOutputCaseEnum outputCase;
    public BinLookupRequestBody withOutputCase(BinLookupRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}