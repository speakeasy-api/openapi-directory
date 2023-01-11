package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ViewsIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=view_id")
    public String viewId;
    public ViewsIdGetPathParams withViewId(String viewId) {
        this.viewId = viewId;
        return this;
    }
}