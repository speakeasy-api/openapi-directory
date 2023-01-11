package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DataprocProjectsRegionsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}