package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LookupUdprnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=udprn")
    public String udprn;
    public LookupUdprnPathParams withUdprn(String udprn) {
        this.udprn = udprn;
        return this;
    }
}