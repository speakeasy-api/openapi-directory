package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerTagValuesListSecurityOption1 option1;
    public CloudresourcemanagerTagValuesListSecurity withOption1(CloudresourcemanagerTagValuesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerTagValuesListSecurityOption2 option2;
    public CloudresourcemanagerTagValuesListSecurity withOption2(CloudresourcemanagerTagValuesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}