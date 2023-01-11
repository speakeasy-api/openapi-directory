package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateSessionCreateSessionRequest {
    @SpeakeasyMetadata("form:name=DateExpiry")
    public OffsetDateTime dateExpiry;
    public CreateSessionCreateSessionRequest withDateExpiry(OffsetDateTime dateExpiry) {
        this.dateExpiry = dateExpiry;
        return this;
    }
    @SpeakeasyMetadata("form:name=Mode")
    public openapisdk.models.shared.SessionEnumModeEnum mode;
    public CreateSessionCreateSessionRequest withMode(openapisdk.models.shared.SessionEnumModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @SpeakeasyMetadata("form:name=Participants")
    public Object[] participants;
    public CreateSessionCreateSessionRequest withParticipants(Object[] participants) {
        this.participants = participants;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.SessionEnumStatusEnum status;
    public CreateSessionCreateSessionRequest withStatus(openapisdk.models.shared.SessionEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateSessionCreateSessionRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateSessionCreateSessionRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}