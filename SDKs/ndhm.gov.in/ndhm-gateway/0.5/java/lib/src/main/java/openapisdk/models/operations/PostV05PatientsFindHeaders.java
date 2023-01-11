package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05PatientsFindHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05PatientsFindHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-CM-ID")
    public String xCMID;
    public PostV05PatientsFindHeaders withXCmId(String xCMID) {
        this.xCMID = xCMID;
        return this;
    }
}