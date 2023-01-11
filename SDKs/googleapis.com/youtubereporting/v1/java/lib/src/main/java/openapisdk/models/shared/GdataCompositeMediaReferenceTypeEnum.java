package openapisdk.models.shared;


public enum GdataCompositeMediaReferenceTypeEnum {
    PATH("PATH"),
    BLOB_REF("BLOB_REF"),
    INLINE("INLINE"),
    BIGSTORE_REF("BIGSTORE_REF"),
    COSMO_BINARY_REFERENCE("COSMO_BINARY_REFERENCE");

    public final String value;

    private GdataCompositeMediaReferenceTypeEnum(String value) {
        this.value = value;
    }
}
