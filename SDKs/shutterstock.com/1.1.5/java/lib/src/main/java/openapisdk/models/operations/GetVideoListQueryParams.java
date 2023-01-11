package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public GetVideoListQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetVideoListViewEnum view;
    public GetVideoListQueryParams withView(GetVideoListViewEnum view) {
        this.view = view;
        return this;
    }
}