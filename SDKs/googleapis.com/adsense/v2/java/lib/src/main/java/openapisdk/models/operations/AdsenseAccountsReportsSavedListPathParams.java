package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsSavedListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdsenseAccountsReportsSavedListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}