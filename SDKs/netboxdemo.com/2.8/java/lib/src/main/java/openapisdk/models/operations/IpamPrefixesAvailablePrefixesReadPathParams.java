package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamPrefixesAvailablePrefixesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamPrefixesAvailablePrefixesReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}