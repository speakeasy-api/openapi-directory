package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityInboundSsoAssignmentsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityInboundSsoAssignmentsDeleteSecurityOption1 option1;
    public CloudidentityInboundSsoAssignmentsDeleteSecurity withOption1(CloudidentityInboundSsoAssignmentsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityInboundSsoAssignmentsDeleteSecurityOption2 option2;
    public CloudidentityInboundSsoAssignmentsDeleteSecurity withOption2(CloudidentityInboundSsoAssignmentsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}