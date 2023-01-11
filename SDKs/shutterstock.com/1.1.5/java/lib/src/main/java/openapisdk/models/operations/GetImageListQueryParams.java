package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public GetImageListQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetImageListViewEnum view;
    public GetImageListQueryParams withView(GetImageListViewEnum view) {
        this.view = view;
        return this;
    }
}