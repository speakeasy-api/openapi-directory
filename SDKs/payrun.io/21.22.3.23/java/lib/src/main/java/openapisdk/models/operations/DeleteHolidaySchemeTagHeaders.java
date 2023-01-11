package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHolidaySchemeTagHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public DeleteHolidaySchemeTagHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public DeleteHolidaySchemeTagHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}