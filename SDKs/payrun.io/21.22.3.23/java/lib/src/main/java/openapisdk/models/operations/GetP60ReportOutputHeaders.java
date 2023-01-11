package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetP60ReportOutputHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetP60ReportOutputHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetP60ReportOutputHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}