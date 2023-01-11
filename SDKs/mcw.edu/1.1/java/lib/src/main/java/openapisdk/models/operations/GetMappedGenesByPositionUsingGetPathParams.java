package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMappedGenesByPositionUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chr")
    public String chr;
    public GetMappedGenesByPositionUsingGetPathParams withChr(String chr) {
        this.chr = chr;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mapKey")
    public Integer mapKey;
    public GetMappedGenesByPositionUsingGetPathParams withMapKey(Integer mapKey) {
        this.mapKey = mapKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=start")
    public Long start;
    public GetMappedGenesByPositionUsingGetPathParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stop")
    public Long stop;
    public GetMappedGenesByPositionUsingGetPathParams withStop(Long stop) {
        this.stop = stop;
        return this;
    }
}