package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomInvitationsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ClassroomInvitationsListSecurityOption1 option1;
    public ClassroomInvitationsListSecurity withOption1(ClassroomInvitationsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ClassroomInvitationsListSecurityOption2 option2;
    public ClassroomInvitationsListSecurity withOption2(ClassroomInvitationsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}