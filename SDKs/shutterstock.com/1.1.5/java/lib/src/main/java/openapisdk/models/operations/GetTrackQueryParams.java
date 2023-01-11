package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetTrackViewEnum view;
    public GetTrackQueryParams withView(GetTrackViewEnum view) {
        this.view = view;
        return this;
    }
}