package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMemberUpdateMemberRequest {
    @SpeakeasyMetadata("form:name=LastConsumedMessageIndex")
    public Long lastConsumedMessageIndex;
    public UpdateMemberUpdateMemberRequest withLastConsumedMessageIndex(Long lastConsumedMessageIndex) {
        this.lastConsumedMessageIndex = lastConsumedMessageIndex;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public UpdateMemberUpdateMemberRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}