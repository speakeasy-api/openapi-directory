package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebriskProjectsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WebriskProjectsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}