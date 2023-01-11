package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public ImportProjectQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}