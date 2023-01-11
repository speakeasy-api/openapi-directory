package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprintsCitationReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preprint_id")
    public String preprintId;
    public PreprintsCitationReadPathParams withPreprintId(String preprintId) {
        this.preprintId = preprintId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=style_id")
    public String styleId;
    public PreprintsCitationReadPathParams withStyleId(String styleId) {
        this.styleId = styleId;
        return this;
    }
}