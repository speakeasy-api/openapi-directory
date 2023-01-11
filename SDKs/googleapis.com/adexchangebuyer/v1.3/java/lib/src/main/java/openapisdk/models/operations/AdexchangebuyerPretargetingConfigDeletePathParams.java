package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerPretargetingConfigDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AdexchangebuyerPretargetingConfigDeletePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=configId")
    public String configId;
    public AdexchangebuyerPretargetingConfigDeletePathParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
}