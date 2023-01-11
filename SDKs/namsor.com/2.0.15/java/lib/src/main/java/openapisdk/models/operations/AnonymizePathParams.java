package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnonymizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=anonymized")
    public Boolean anonymized;
    public AnonymizePathParams withAnonymized(Boolean anonymized) {
        this.anonymized = anonymized;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=source")
    public String source;
    public AnonymizePathParams withSource(String source) {
        this.source = source;
        return this;
    }
}