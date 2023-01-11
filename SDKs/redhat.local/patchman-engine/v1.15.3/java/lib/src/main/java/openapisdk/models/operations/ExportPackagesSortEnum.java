package openapisdk.models.operations;


public enum ExportPackagesSortEnum {
    ID("id"),
    NAME("name"),
    SYSTEMS_INSTALLED("systems_installed"),
    SYSTEMS_UPDATABLE("systems_updatable");

    public final String value;

    private ExportPackagesSortEnum(String value) {
        this.value = value;
    }
}
