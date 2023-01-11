package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelCreateChannelRequest {
    @SpeakeasyMetadata("form:name=Attributes")
    public String attributes;
    public CreateChannelCreateChannelRequest withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=CreatedBy")
    public String createdBy;
    public CreateChannelCreateChannelRequest withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateCreated")
    public OffsetDateTime dateCreated;
    public CreateChannelCreateChannelRequest withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("form:name=DateUpdated")
    public OffsetDateTime dateUpdated;
    public CreateChannelCreateChannelRequest withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateChannelCreateChannelRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.ChannelEnumChannelTypeEnum type;
    public CreateChannelCreateChannelRequest withType(openapisdk.models.shared.ChannelEnumChannelTypeEnum type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateChannelCreateChannelRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}