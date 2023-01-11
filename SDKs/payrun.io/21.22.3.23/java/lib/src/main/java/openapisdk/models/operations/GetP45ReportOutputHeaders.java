package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetP45ReportOutputHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetP45ReportOutputHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetP45ReportOutputHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}