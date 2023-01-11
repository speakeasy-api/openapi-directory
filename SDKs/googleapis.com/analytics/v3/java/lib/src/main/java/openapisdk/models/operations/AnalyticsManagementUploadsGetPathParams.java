package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementUploadsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementUploadsGetPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customDataSourceId")
    public String customDataSourceId;
    public AnalyticsManagementUploadsGetPathParams withCustomDataSourceId(String customDataSourceId) {
        this.customDataSourceId = customDataSourceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uploadId")
    public String uploadId;
    public AnalyticsManagementUploadsGetPathParams withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webPropertyId")
    public String webPropertyId;
    public AnalyticsManagementUploadsGetPathParams withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}