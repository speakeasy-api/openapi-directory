package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetImageCollectionEmbedEnum[] embed;
    public GetImageCollectionQueryParams withEmbed(GetImageCollectionEmbedEnum[] embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=share_code")
    public String shareCode;
    public GetImageCollectionQueryParams withShareCode(String shareCode) {
        this.shareCode = shareCode;
        return this;
    }
}