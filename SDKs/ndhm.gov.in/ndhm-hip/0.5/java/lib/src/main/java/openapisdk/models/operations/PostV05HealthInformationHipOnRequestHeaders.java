package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationHipOnRequestHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05HealthInformationHipOnRequestHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-CM-ID")
    public String xCMID;
    public PostV05HealthInformationHipOnRequestHeaders withXCmId(String xCMID) {
        this.xCMID = xCMID;
        return this;
    }
}