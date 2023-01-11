package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsStoredInfoTypesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DlpProjectsStoredInfoTypesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}