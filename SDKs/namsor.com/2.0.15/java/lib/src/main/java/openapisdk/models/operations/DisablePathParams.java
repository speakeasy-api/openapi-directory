package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=disabled")
    public Boolean disabled;
    public DisablePathParams withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=source")
    public String source;
    public DisablePathParams withSource(String source) {
        this.source = source;
        return this;
    }
}