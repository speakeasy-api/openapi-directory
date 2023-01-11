package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamPrefixesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamPrefixesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}