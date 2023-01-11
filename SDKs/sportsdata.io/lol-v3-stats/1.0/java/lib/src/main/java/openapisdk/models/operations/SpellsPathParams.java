package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpellsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public SpellsFormatEnum format;
    public SpellsPathParams withFormat(SpellsFormatEnum format) {
        this.format = format;
        return this;
    }
}