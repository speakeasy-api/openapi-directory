package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsPublishPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DrivelabelsLabelsPublishPathParams withName(String name) {
        this.name = name;
        return this;
    }
}