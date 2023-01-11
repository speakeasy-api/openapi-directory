package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuerySuggestedImageCountRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public QuerySuggestedImageCountRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagFilter tagFilter;
    public QuerySuggestedImageCountRequests withTagFilter(openapisdk.models.shared.TagFilter tagFilter) {
        this.tagFilter = tagFilter;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.TagFilter tagFilter1;
    public QuerySuggestedImageCountRequests withTagFilter1(openapisdk.models.shared.TagFilter tagFilter1) {
        this.tagFilter1 = tagFilter1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public QuerySuggestedImageCountRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}