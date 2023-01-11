package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaydeveloperreportingVitalsErrorsReportsSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PlaydeveloperreportingVitalsErrorsReportsSearchPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}