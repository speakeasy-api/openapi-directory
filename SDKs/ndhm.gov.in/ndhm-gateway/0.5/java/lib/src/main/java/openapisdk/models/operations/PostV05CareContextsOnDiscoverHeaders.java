package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05CareContextsOnDiscoverHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05CareContextsOnDiscoverHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-CM-ID")
    public String xCMID;
    public PostV05CareContextsOnDiscoverHeaders withXCmId(String xCMID) {
        this.xCMID = xCMID;
        return this;
    }
}