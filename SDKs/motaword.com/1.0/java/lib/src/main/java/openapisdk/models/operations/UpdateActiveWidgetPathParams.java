package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateActiveWidgetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public UpdateActiveWidgetPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=widgetId")
    public Long widgetId;
    public UpdateActiveWidgetPathParams withWidgetId(Long widgetId) {
        this.widgetId = widgetId;
        return this;
    }
}