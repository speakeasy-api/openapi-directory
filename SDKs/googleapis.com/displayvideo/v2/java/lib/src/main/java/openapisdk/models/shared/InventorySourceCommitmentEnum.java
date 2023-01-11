package openapisdk.models.shared;


public enum InventorySourceCommitmentEnum {
    INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED("INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED"),
    INVENTORY_SOURCE_COMMITMENT_GUARANTEED("INVENTORY_SOURCE_COMMITMENT_GUARANTEED"),
    INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED("INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED");

    public final String value;

    private InventorySourceCommitmentEnum(String value) {
        this.value = value;
    }
}
