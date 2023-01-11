package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerLiensListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerLiensListSecurityOption1 option1;
    public CloudresourcemanagerLiensListSecurity withOption1(CloudresourcemanagerLiensListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerLiensListSecurityOption2 option2;
    public CloudresourcemanagerLiensListSecurity withOption2(CloudresourcemanagerLiensListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}