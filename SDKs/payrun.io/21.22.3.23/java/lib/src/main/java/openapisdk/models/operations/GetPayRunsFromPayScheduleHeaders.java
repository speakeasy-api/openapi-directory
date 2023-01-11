package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayRunsFromPayScheduleHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetPayRunsFromPayScheduleHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetPayRunsFromPayScheduleHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}