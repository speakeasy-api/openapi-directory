package openapisdk.models.shared;


public enum ItemTypeEnum {
    BARCODE("barcode"),
    BLUETITAN("bluetitan"),
    GBTAG("gbtag"),
    RELAY("relay"),
    SMARTTAG("smarttag"),
    TAG("tag");

    public final String value;

    private ItemTypeEnum(String value) {
        this.value = value;
    }
}
