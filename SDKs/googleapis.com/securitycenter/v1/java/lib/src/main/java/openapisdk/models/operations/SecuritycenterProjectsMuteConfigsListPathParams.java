package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsMuteConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecuritycenterProjectsMuteConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}