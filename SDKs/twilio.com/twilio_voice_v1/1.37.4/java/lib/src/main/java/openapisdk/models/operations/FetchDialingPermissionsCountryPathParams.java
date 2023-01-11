package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDialingPermissionsCountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IsoCode")
    public String isoCode;
    public FetchDialingPermissionsCountryPathParams withIsoCode(String isoCode) {
        this.isoCode = isoCode;
        return this;
    }
}