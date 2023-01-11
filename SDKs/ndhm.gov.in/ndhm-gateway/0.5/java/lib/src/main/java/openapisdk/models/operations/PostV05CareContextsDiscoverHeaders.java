package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05CareContextsDiscoverHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05CareContextsDiscoverHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIP-ID")
    public String xHIPID;
    public PostV05CareContextsDiscoverHeaders withXHipId(String xHIPID) {
        this.xHIPID = xHIPID;
        return this;
    }
}