package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActiveWidgetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetActiveWidgetPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=widgetId")
    public Long widgetId;
    public GetActiveWidgetPathParams withWidgetId(Long widgetId) {
        this.widgetId = widgetId;
        return this;
    }
}