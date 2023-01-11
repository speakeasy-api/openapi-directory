package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddExpiryListingsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object[] aftermarketListingExpiryCreates;
    public AddExpiryListingsRequests withAftermarketListingExpiryCreates(Object[] aftermarketListingExpiryCreates) {
        this.aftermarketListingExpiryCreates = aftermarketListingExpiryCreates;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public AddExpiryListingsRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public AddExpiryListingsRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}