package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Duration {
    @SpeakeasyMetadata("queryParam:name=from")
    public Long from;
    public Duration withFrom(Long from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=to")
    public Long to;
    public Duration withTo(Long to) {
        this.to = to;
        return this;
    }
}