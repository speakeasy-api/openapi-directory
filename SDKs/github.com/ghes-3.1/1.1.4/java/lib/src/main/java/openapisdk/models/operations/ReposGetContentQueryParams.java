package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetContentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref")
    public String ref;
    public ReposGetContentQueryParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
}