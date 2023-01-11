package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest {
    @SpeakeasyMetadata("form:name=AccessControlAllowOrigin")
    public String accessControlAllowOrigin;
    public CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest withAccessControlAllowOrigin(String accessControlAllowOrigin) {
        this.accessControlAllowOrigin = accessControlAllowOrigin;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}