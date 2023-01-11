package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadUsageHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public DownloadUsageHistoryPathParams withKey(String key) {
        this.key = key;
        return this;
    }
}