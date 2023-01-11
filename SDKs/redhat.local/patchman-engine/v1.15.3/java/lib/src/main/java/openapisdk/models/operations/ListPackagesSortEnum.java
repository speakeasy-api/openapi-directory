package openapisdk.models.operations;


public enum ListPackagesSortEnum {
    ID("id"),
    NAME("name"),
    SYSTEMS_INSTALLED("systems_installed"),
    SYSTEMS_UPDATABLE("systems_updatable");

    public final String value;

    private ListPackagesSortEnum(String value) {
        this.value = value;
    }
}
