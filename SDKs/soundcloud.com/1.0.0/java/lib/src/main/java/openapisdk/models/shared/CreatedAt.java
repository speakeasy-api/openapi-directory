package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatedAt {
    @SpeakeasyMetadata("queryParam:name=from")
    public String from;
    public CreatedAt withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=to")
    public String to;
    public CreatedAt withTo(String to) {
        this.to = to;
        return this;
    }
}