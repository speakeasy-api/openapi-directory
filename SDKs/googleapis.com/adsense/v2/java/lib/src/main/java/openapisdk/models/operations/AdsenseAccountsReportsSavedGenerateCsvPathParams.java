package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsSavedGenerateCsvPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AdsenseAccountsReportsSavedGenerateCsvPathParams withName(String name) {
        this.name = name;
        return this;
    }
}