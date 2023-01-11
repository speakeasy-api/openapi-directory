package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ItemsFormatEnum format;
    public ItemsPathParams withFormat(ItemsFormatEnum format) {
        this.format = format;
        return this;
    }
}