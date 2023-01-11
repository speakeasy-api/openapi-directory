package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CitationsStylesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=style_id")
    public String styleId;
    public CitationsStylesReadPathParams withStyleId(String styleId) {
        this.styleId = styleId;
        return this;
    }
}