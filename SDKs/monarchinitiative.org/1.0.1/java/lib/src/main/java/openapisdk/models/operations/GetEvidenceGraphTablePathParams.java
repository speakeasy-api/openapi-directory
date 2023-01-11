package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEvidenceGraphTablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEvidenceGraphTablePathParams withId(String id) {
        this.id = id;
        return this;
    }
}