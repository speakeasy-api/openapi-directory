package openapisdk.models.shared;


public enum DriveOptionsClientSideEncryptedOptionEnum {
    CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED("CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED"),
    CLIENT_SIDE_ENCRYPTED_OPTION_ANY("CLIENT_SIDE_ENCRYPTED_OPTION_ANY"),
    CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED("CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED"),
    CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED("CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED");

    public final String value;

    private DriveOptionsClientSideEncryptedOptionEnum(String value) {
        this.value = value;
    }
}
