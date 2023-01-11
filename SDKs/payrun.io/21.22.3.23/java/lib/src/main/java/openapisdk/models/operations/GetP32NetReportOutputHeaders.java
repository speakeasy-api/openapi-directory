package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetP32NetReportOutputHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetP32NetReportOutputHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetP32NetReportOutputHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}