package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindDataExporterConfigByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataExporterConfigId")
    public String dataExporterConfigId;
    public FindDataExporterConfigByIdPathParams withDataExporterConfigId(String dataExporterConfigId) {
        this.dataExporterConfigId = dataExporterConfigId;
        return this;
    }
}