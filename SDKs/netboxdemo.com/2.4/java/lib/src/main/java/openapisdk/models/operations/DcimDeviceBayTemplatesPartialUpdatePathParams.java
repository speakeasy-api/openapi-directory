package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBayTemplatesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimDeviceBayTemplatesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}