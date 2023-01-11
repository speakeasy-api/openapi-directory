package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberCopyrightsZoomXYFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=X")
    public Long x;
    public GetMapVersionNumberCopyrightsZoomXYFormatPathParams withX(Long x) {
        this.x = x;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Y")
    public Long y;
    public GetMapVersionNumberCopyrightsZoomXYFormatPathParams withY(Long y) {
        this.y = y;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum format;
    public GetMapVersionNumberCopyrightsZoomXYFormatPathParams withFormat(GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetMapVersionNumberCopyrightsZoomXYFormatPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zoom")
    public Long zoom;
    public GetMapVersionNumberCopyrightsZoomXYFormatPathParams withZoom(Long zoom) {
        this.zoom = zoom;
        return this;
    }
}