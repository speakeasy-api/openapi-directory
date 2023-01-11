package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApiSocialNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=idType")
    public openapisdk.models.shared.IdTypeEnum idType;
    public PostApiSocialNumberQueryParams withIdType(openapisdk.models.shared.IdTypeEnum idType) {
        this.idType = idType;
        return this;
    }
}