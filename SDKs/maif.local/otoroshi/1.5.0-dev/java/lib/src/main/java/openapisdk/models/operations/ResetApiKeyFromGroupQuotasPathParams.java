package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetApiKeyFromGroupQuotasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public ResetApiKeyFromGroupQuotasPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ResetApiKeyFromGroupQuotasPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}