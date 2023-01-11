package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsStoredInfoTypesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DlpProjectsStoredInfoTypesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}