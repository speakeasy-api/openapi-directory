package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public GetTrackListQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetTrackListViewEnum view;
    public GetTrackListQueryParams withView(GetTrackListViewEnum view) {
        this.view = view;
        return this;
    }
}