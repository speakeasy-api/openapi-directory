package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUserRolesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Token")
    public String token;
    public FetchUserRolesHeaders withToken(String token) {
        this.token = token;
        return this;
    }
}