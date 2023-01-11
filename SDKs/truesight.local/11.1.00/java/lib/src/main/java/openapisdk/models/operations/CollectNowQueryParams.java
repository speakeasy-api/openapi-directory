package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectNowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monitorClass")
    public String monitorClass;
    public CollectNowQueryParams withMonitorClass(String monitorClass) {
        this.monitorClass = monitorClass;
        return this;
    }
}