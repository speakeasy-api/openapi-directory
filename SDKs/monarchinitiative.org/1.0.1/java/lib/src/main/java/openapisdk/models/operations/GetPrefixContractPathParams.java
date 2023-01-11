package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPrefixContractPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uri")
    public String uri;
    public GetPrefixContractPathParams withUri(String uri) {
        this.uri = uri;
        return this;
    }
}