package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceBayTemplatesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimDeviceBayTemplatesReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}