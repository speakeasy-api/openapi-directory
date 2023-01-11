package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdrnToAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=udprn")
    public String udprn;
    public UpdrnToAddressPathParams withUdprn(String udprn) {
        this.udprn = udprn;
        return this;
    }
}