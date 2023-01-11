package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeApimKey apimKey;
    public Security withApimKey(SchemeApimKey apimKey) {
        this.apimKey = apimKey;
        return this;
    }
}