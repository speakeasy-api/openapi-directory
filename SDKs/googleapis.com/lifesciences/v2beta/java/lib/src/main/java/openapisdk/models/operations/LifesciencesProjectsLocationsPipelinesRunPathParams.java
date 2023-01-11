package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LifesciencesProjectsLocationsPipelinesRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public LifesciencesProjectsLocationsPipelinesRunPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}