package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsGetAdBlockingRecoveryTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AdsenseAccountsGetAdBlockingRecoveryTagPathParams withName(String name) {
        this.name = name;
        return this;
    }
}