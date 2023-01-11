package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamPrefixesAvailablePrefixesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamPrefixesAvailablePrefixesCreatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}