package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostcodeToAddressesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=postcode")
    public String postcode;
    public PostcodeToAddressesPathParams withPostcode(String postcode) {
        this.postcode = postcode;
        return this;
    }
}