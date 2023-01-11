package openapisdk.models.shared;


public enum ProximityEnum {
    FAR("far"),
    NEAR("near"),
    IMMEDIATE("immediate");

    public final String value;

    private ProximityEnum(String value) {
        this.value = value;
    }
}
