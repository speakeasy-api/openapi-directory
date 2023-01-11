package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBayTemplatesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimDeviceBayTemplatesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}