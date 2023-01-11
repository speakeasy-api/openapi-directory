package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsGetSavedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AdsenseAccountsReportsGetSavedPathParams withName(String name) {
        this.name = name;
        return this;
    }
}