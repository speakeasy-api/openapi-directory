package openapisdk.models.shared;


public enum CompositeMediaReferenceTypeEnum {
    PATH("PATH"),
    BLOB_REF("BLOB_REF"),
    INLINE("INLINE"),
    BIGSTORE_REF("BIGSTORE_REF"),
    COSMO_BINARY_REFERENCE("COSMO_BINARY_REFERENCE");

    public final String value;

    private CompositeMediaReferenceTypeEnum(String value) {
        this.value = value;
    }
}
