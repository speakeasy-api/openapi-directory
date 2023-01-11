package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}