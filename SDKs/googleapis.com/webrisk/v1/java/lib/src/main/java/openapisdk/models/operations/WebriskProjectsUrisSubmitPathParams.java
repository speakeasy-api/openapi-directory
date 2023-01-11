package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebriskProjectsUrisSubmitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WebriskProjectsUrisSubmitPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}