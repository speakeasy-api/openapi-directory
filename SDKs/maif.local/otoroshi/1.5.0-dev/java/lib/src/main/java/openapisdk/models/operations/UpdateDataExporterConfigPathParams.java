package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDataExporterConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataExporterConfigId")
    public String dataExporterConfigId;
    public UpdateDataExporterConfigPathParams withDataExporterConfigId(String dataExporterConfigId) {
        this.dataExporterConfigId = dataExporterConfigId;
        return this;
    }
}