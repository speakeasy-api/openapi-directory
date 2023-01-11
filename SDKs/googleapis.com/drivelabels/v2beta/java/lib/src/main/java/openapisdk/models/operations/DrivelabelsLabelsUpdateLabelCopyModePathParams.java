package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsUpdateLabelCopyModePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DrivelabelsLabelsUpdateLabelCopyModePathParams withName(String name) {
        this.name = name;
        return this;
    }
}