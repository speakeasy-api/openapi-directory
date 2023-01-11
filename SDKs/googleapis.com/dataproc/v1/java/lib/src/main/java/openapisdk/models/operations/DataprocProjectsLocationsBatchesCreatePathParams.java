package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsLocationsBatchesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DataprocProjectsLocationsBatchesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}