package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLicenseePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseeNumber")
    public String licenseeNumber;
    public GetLicenseePathParams withLicenseeNumber(String licenseeNumber) {
        this.licenseeNumber = licenseeNumber;
        return this;
    }
}