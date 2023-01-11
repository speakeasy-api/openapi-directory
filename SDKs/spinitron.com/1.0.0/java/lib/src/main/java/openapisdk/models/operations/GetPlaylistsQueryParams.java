package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaylistsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public GetPlaylistsQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public OffsetDateTime end;
    public GetPlaylistsQueryParams withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public String[] expand;
    public GetPlaylistsQueryParams withExpand(String[] expand) {
        this.expand = expand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String[] fields;
    public GetPlaylistsQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetPlaylistsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=persona_id")
    public Long personaId;
    public GetPlaylistsQueryParams withPersonaId(Long personaId) {
        this.personaId = personaId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=show_id")
    public Long showId;
    public GetPlaylistsQueryParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public OffsetDateTime start;
    public GetPlaylistsQueryParams withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
}