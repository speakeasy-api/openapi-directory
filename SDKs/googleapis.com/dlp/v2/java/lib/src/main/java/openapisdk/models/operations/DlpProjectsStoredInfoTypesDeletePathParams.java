package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsStoredInfoTypesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DlpProjectsStoredInfoTypesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}