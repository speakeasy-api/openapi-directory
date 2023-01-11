package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaylistByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_timestamp_ms")
    public Long lastTimestampMs;
    public GetPlaylistByIdQueryParams withLastTimestampMs(Long lastTimestampMs) {
        this.lastTimestampMs = lastTimestampMs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetPlaylistByIdSortEnum sort;
    public GetPlaylistByIdQueryParams withSort(GetPlaylistByIdSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetPlaylistByIdTypeEnum type;
    public GetPlaylistByIdQueryParams withType(GetPlaylistByIdTypeEnum type) {
        this.type = type;
        return this;
    }
}