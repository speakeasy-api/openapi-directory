package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsSavedGeneratePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AdsenseAccountsReportsSavedGeneratePathParams withName(String name) {
        this.name = name;
        return this;
    }
}