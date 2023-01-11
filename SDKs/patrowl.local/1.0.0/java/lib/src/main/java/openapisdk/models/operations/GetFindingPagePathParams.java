package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindingPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scanId")
    public Long scanId;
    public GetFindingPagePathParams withScanId(Long scanId) {
        this.scanId = scanId;
        return this;
    }
}