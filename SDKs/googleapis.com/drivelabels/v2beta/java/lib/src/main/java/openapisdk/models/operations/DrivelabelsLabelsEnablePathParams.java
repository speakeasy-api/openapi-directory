package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsEnablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DrivelabelsLabelsEnablePathParams withName(String name) {
        this.name = name;
        return this;
    }
}