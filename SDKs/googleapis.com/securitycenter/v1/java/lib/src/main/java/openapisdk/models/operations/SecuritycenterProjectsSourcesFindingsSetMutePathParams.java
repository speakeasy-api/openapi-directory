package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsSourcesFindingsSetMutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterProjectsSourcesFindingsSetMutePathParams withName(String name) {
        this.name = name;
        return this;
    }
}