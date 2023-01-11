package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityInboundSsoAssignmentsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityInboundSsoAssignmentsPatchSecurityOption1 option1;
    public CloudidentityInboundSsoAssignmentsPatchSecurity withOption1(CloudidentityInboundSsoAssignmentsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityInboundSsoAssignmentsPatchSecurityOption2 option2;
    public CloudidentityInboundSsoAssignmentsPatchSecurity withOption2(CloudidentityInboundSsoAssignmentsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}