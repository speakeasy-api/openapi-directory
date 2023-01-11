package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivelabelsLabelsRevisionsPermissionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DrivelabelsLabelsRevisionsPermissionsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}