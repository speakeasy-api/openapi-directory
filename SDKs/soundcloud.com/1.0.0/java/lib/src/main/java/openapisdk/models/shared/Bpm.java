package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Bpm {
    @SpeakeasyMetadata("queryParam:name=from")
    public Long from;
    public Bpm withFrom(Long from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=to")
    public Long to;
    public Bpm withTo(Long to) {
        this.to = to;
        return this;
    }
}