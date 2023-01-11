package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVaccineStatusHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public GetVaccineStatusHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetVaccineStatusHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public GetVaccineStatusHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}