package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayslip3ReportOutputHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetPayslip3ReportOutputHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetPayslip3ReportOutputHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}