package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetP11SummaryReportOutputHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetP11SummaryReportOutputHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetP11SummaryReportOutputHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}