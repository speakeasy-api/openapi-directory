package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopScanPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scanId")
    public Long scanId;
    public StopScanPagePathParams withScanId(Long scanId) {
        this.scanId = scanId;
        return this;
    }
}