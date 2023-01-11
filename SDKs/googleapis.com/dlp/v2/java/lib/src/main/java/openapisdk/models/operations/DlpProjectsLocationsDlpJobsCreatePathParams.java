package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsDlpJobsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DlpProjectsLocationsDlpJobsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}