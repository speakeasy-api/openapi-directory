package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StatusScanPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scanId")
    public Long scanId;
    public StatusScanPagePathParams withScanId(Long scanId) {
        this.scanId = scanId;
        return this;
    }
}