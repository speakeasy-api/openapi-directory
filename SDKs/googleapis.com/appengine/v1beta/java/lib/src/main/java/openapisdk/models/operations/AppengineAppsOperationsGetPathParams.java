package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsOperationsGetPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=operationsId")
    public String operationsId;
    public AppengineAppsOperationsGetPathParams withOperationsId(String operationsId) {
        this.operationsId = operationsId;
        return this;
    }
}