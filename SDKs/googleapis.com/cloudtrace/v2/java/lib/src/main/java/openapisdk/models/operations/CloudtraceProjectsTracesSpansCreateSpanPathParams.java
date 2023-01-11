package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTracesSpansCreateSpanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudtraceProjectsTracesSpansCreateSpanPathParams withName(String name) {
        this.name = name;
        return this;
    }
}