package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsAnnotationSpecSetsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatalabelingProjectsAnnotationSpecSetsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}