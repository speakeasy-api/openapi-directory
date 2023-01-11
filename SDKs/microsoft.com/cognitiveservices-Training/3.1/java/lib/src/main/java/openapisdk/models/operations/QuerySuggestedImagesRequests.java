package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuerySuggestedImagesRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public QuerySuggestedImagesRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SuggestedTagAndRegionQueryToken suggestedTagAndRegionQueryToken;
    public QuerySuggestedImagesRequests withSuggestedTagAndRegionQueryToken(openapisdk.models.shared.SuggestedTagAndRegionQueryToken suggestedTagAndRegionQueryToken) {
        this.suggestedTagAndRegionQueryToken = suggestedTagAndRegionQueryToken;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.SuggestedTagAndRegionQueryToken suggestedTagAndRegionQueryToken1;
    public QuerySuggestedImagesRequests withSuggestedTagAndRegionQueryToken1(openapisdk.models.shared.SuggestedTagAndRegionQueryToken suggestedTagAndRegionQueryToken1) {
        this.suggestedTagAndRegionQueryToken1 = suggestedTagAndRegionQueryToken1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public QuerySuggestedImagesRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}