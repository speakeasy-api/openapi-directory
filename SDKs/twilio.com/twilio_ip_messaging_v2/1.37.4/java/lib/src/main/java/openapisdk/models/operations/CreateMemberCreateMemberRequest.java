package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateMemberCreateMemberRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateMemberCreateMemberRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public CreateMemberCreateMemberRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public CreateMemberCreateMemberRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateMemberCreateMemberRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastConsumedMessageIndex")
    public Long lastConsumedMessageIndex;
    public CreateMemberCreateMemberRequest withLastConsumedMessageIndex(Long lastConsumedMessageIndex) {
        this.lastConsumedMessageIndex = lastConsumedMessageIndex;
        return this;
    }
    @SpeakeasyMetadata("form:name=LastConsumptionTimestamp")
    public OffsetDateTime lastConsumptionTimestamp;
    public CreateMemberCreateMemberRequest withLastConsumptionTimestamp(OffsetDateTime lastConsumptionTimestamp) {
        this.lastConsumptionTimestamp = lastConsumptionTimestamp;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoleSid")
    public String roleSid;
    public CreateMemberCreateMemberRequest withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
}