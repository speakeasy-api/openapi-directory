package openapisdk.models.operations;


public enum GetFacilitiesByLocationTypeEnum {
    HEALTH("health"),
    CEMETERY("cemetery"),
    BENEFITS("benefits"),
    VET_CENTER("vet_center");

    public final String value;

    private GetFacilitiesByLocationTypeEnum(String value) {
        this.value = value;
    }
}
