package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsStateReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BatchProjectsLocationsStateReportPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}