package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJournalExpressionSchemaHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetJournalExpressionSchemaHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetJournalExpressionSchemaHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}