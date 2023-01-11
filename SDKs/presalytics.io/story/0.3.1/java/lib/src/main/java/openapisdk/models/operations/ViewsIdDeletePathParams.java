package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ViewsIdDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=view_id")
    public String viewId;
    public ViewsIdDeletePathParams withViewId(String viewId) {
        this.viewId = viewId;
        return this;
    }
}