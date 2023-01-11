package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMappedSslpByPositionUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chr")
    public String chr;
    public GetMappedSslpByPositionUsingGetPathParams withChr(String chr) {
        this.chr = chr;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mapKey")
    public Integer mapKey;
    public GetMappedSslpByPositionUsingGetPathParams withMapKey(Integer mapKey) {
        this.mapKey = mapKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=start")
    public Long start;
    public GetMappedSslpByPositionUsingGetPathParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stop")
    public Long stop;
    public GetMappedSslpByPositionUsingGetPathParams withStop(Long stop) {
        this.stop = stop;
        return this;
    }
}