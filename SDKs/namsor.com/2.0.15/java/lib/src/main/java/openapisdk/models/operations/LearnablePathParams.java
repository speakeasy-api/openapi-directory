package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LearnablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=learnable")
    public Boolean learnable;
    public LearnablePathParams withLearnable(Boolean learnable) {
        this.learnable = learnable;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=source")
    public String source;
    public LearnablePathParams withSource(String source) {
        this.source = source;
        return this;
    }
}