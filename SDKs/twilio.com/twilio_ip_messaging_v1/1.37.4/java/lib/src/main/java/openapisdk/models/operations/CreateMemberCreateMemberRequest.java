package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMemberCreateMemberRequest {
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateMemberCreateMemberRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public CreateMemberCreateMemberRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}