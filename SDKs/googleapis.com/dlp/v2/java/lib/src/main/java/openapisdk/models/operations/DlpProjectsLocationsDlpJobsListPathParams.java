package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsDlpJobsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DlpProjectsLocationsDlpJobsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}