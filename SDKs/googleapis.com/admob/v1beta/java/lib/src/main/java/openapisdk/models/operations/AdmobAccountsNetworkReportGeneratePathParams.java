package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsNetworkReportGeneratePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdmobAccountsNetworkReportGeneratePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}