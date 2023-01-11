package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsMediationReportGeneratePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdmobAccountsMediationReportGeneratePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}