package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMemberUpdateMemberRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public UpdateMemberUpdateMemberRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public UpdateMemberUpdateMemberRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public UpdateMemberUpdateMemberRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastConsumedMessageIndex")
    public Long lastConsumedMessageIndex;
    public UpdateMemberUpdateMemberRequest withLastConsumedMessageIndex(Long lastConsumedMessageIndex) {
        this.lastConsumedMessageIndex = lastConsumedMessageIndex;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastConsumptionTimestamp")
    public OffsetDateTime lastConsumptionTimestamp;
    public UpdateMemberUpdateMemberRequest withLastConsumptionTimestamp(OffsetDateTime lastConsumptionTimestamp) {
        this.lastConsumptionTimestamp = lastConsumptionTimestamp;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public UpdateMemberUpdateMemberRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}