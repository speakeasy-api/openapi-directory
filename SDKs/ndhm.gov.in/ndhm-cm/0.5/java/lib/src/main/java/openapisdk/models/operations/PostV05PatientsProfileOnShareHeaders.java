package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05PatientsProfileOnShareHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05PatientsProfileOnShareHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}