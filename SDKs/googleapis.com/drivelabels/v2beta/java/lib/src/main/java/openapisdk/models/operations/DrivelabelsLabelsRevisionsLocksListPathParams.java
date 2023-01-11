package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsLocksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DrivelabelsLabelsRevisionsLocksListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}