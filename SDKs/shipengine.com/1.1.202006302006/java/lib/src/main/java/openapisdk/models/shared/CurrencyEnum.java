package openapisdk.models.shared;


public enum CurrencyEnum {
    USD("usd"),
    CAD("cad"),
    AUD("aud"),
    GBP("gbp"),
    EUR("eur"),
    NZD("nzd");

    public final String value;

    private CurrencyEnum(String value) {
        this.value = value;
    }
}
