package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSpinsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public GetSpinsQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public OffsetDateTime end;
    public GetSpinsQueryParams withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public String[] expand;
    public GetSpinsQueryParams withExpand(String[] expand) {
        this.expand = expand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String[] fields;
    public GetSpinsQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetSpinsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=playlist_id")
    public Long playlistId;
    public GetSpinsQueryParams withPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=show_id")
    public Long showId;
    public GetSpinsQueryParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public OffsetDateTime start;
    public GetSpinsQueryParams withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
}