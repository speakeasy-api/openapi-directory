package openapisdk.models.shared;


public enum UnitOfMeasureEnum {
    MG("mg"),
    G("g"),
    KG("kg"),
    GR("gr"),
    OZ("oz"),
    TOZ("toz"),
    CT("ct"),
    DWT("dwt");

    public final String value;

    private UnitOfMeasureEnum(String value) {
        this.value = value;
    }
}
