package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDataExporterConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataExporterConfigId")
    public String dataExporterConfigId;
    public PatchDataExporterConfigPathParams withDataExporterConfigId(String dataExporterConfigId) {
        this.dataExporterConfigId = dataExporterConfigId;
        return this;
    }
}