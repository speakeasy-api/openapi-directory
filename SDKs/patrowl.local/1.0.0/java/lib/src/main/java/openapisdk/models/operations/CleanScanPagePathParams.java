package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CleanScanPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scanId")
    public Long scanId;
    public CleanScanPagePathParams withScanId(Long scanId) {
        this.scanId = scanId;
        return this;
    }
}