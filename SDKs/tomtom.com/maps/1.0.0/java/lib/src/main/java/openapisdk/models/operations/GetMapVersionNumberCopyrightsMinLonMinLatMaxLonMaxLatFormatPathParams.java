package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum format;
    public GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams withFormat(GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=maxLat")
    public Double maxLat;
    public GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams withMaxLat(Double maxLat) {
        this.maxLat = maxLat;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=maxLon")
    public Double maxLon;
    public GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams withMaxLon(Double maxLon) {
        this.maxLon = maxLon;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minLat")
    public Double minLat;
    public GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams withMinLat(Double minLat) {
        this.minLat = minLat;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minLon")
    public Double minLon;
    public GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams withMinLon(Double minLon) {
        this.minLon = minLon;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}