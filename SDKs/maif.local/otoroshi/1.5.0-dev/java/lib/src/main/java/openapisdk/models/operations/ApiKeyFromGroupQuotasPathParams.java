package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApiKeyFromGroupQuotasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public ApiKeyFromGroupQuotasPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ApiKeyFromGroupQuotasPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}