package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentType")
    public openapisdk.models.shared.ContentTypeEnum contentType;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams withContentType(openapisdk.models.shared.ContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=origin")
    public String origin;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}