package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsAnnotationSpecSetsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatalabelingProjectsAnnotationSpecSetsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}