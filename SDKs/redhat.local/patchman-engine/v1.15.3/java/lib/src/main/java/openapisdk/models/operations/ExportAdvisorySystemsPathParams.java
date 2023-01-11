package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAdvisorySystemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advisory_id")
    public String advisoryId;
    public ExportAdvisorySystemsPathParams withAdvisoryId(String advisoryId) {
        this.advisoryId = advisoryId;
        return this;
    }
}