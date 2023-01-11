package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGooddataHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Token")
    public String token;
    public CreateGooddataHeaders withToken(String token) {
        this.token = token;
        return this;
    }
}