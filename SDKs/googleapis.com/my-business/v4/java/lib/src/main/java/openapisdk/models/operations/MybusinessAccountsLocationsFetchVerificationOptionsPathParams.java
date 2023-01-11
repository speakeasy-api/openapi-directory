package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsFetchVerificationOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsLocationsFetchVerificationOptionsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}