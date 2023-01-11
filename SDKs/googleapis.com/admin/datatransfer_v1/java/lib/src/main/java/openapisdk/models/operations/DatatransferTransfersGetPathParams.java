package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatatransferTransfersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataTransferId")
    public String dataTransferId;
    public DatatransferTransfersGetPathParams withDataTransferId(String dataTransferId) {
        this.dataTransferId = dataTransferId;
        return this;
    }
}