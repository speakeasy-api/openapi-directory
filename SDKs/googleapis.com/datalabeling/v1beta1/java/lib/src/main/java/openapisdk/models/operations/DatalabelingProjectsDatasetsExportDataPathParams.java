package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsExportDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatalabelingProjectsDatasetsExportDataPathParams withName(String name) {
        this.name = name;
        return this;
    }
}