package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsSourcesFindingsSetStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterProjectsSourcesFindingsSetStatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}