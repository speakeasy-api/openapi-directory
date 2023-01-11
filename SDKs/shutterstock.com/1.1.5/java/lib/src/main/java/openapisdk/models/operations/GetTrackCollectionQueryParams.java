package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetTrackCollectionEmbedEnum[] embed;
    public GetTrackCollectionQueryParams withEmbed(GetTrackCollectionEmbedEnum[] embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=share_code")
    public String shareCode;
    public GetTrackCollectionQueryParams withShareCode(String shareCode) {
        this.shareCode = shareCode;
        return this;
    }
}