package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagKeysListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerTagKeysListSecurityOption1 option1;
    public CloudresourcemanagerTagKeysListSecurity withOption1(CloudresourcemanagerTagKeysListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerTagKeysListSecurityOption2 option2;
    public CloudresourcemanagerTagKeysListSecurity withOption2(CloudresourcemanagerTagKeysListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}