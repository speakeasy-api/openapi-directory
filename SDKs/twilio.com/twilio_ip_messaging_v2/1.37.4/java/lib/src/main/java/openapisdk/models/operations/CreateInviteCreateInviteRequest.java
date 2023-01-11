package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInviteCreateInviteRequest {
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateInviteCreateInviteRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public CreateInviteCreateInviteRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}