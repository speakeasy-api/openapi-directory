package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDialingPermissionsHrsPrefixesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IsoCode")
    public String isoCode;
    public ListDialingPermissionsHrsPrefixesPathParams withIsoCode(String isoCode) {
        this.isoCode = isoCode;
        return this;
    }
}