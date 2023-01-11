package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaylistsIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public String[] expand;
    public GetPlaylistsIdQueryParams withExpand(String[] expand) {
        this.expand = expand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String[] fields;
    public GetPlaylistsIdQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
}