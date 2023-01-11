package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaydeveloperreportingAnomaliesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PlaydeveloperreportingAnomaliesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}