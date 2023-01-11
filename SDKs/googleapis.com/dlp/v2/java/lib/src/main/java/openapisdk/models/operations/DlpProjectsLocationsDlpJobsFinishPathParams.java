package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsDlpJobsFinishPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DlpProjectsLocationsDlpJobsFinishPathParams withName(String name) {
        this.name = name;
        return this;
    }
}