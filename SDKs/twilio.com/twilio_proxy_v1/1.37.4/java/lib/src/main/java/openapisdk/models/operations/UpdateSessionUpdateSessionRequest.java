package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSessionUpdateSessionRequest {
    @SpeakeasyMetadata("form:name=DateExpiry")
    public OffsetDateTime dateExpiry;
    public UpdateSessionUpdateSessionRequest withDateExpiry(OffsetDateTime dateExpiry) {
        this.dateExpiry = dateExpiry;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.SessionEnumStatusEnum status;
    public UpdateSessionUpdateSessionRequest withStatus(openapisdk.models.shared.SessionEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public UpdateSessionUpdateSessionRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}