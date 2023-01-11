package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDataExporterConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataExporterConfigId")
    public String dataExporterConfigId;
    public DeleteDataExporterConfigPathParams withDataExporterConfigId(String dataExporterConfigId) {
        this.dataExporterConfigId = dataExporterConfigId;
        return this;
    }
}