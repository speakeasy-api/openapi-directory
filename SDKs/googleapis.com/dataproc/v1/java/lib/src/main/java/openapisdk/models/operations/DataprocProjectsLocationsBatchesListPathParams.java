package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsLocationsBatchesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DataprocProjectsLocationsBatchesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}