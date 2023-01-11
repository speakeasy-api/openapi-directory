package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetVideoCollectionEmbedEnum[] embed;
    public GetVideoCollectionQueryParams withEmbed(GetVideoCollectionEmbedEnum[] embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=share_code")
    public String shareCode;
    public GetVideoCollectionQueryParams withShareCode(String shareCode) {
        this.shareCode = shareCode;
        return this;
    }
}