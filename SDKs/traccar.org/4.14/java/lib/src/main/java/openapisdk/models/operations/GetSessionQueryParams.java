package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetSessionQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}