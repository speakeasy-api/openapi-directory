package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebriskProjectsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WebriskProjectsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}