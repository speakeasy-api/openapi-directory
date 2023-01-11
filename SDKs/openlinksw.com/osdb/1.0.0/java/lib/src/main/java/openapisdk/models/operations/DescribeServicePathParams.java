package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public DescribeServicePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}