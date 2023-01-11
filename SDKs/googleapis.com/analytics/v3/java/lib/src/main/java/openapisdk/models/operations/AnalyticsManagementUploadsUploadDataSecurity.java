package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementUploadsUploadDataSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementUploadsUploadDataSecurityOption1 option1;
    public AnalyticsManagementUploadsUploadDataSecurity withOption1(AnalyticsManagementUploadsUploadDataSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementUploadsUploadDataSecurityOption2 option2;
    public AnalyticsManagementUploadsUploadDataSecurity withOption2(AnalyticsManagementUploadsUploadDataSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}