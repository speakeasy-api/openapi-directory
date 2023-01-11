package openapisdk.models.operations;


public enum IamRolesGetPublicKeyTypeEnum {
    TYPE_NONE("TYPE_NONE"),
    TYPE_X509_PEM_FILE("TYPE_X509_PEM_FILE"),
    TYPE_RAW_PUBLIC_KEY("TYPE_RAW_PUBLIC_KEY");

    public final String value;

    private IamRolesGetPublicKeyTypeEnum(String value) {
        this.value = value;
    }
}
