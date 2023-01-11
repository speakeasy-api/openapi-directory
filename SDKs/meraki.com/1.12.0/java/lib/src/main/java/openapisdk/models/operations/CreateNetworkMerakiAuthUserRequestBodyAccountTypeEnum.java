package openapisdk.models.operations;


public enum CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum {
    GUEST("Guest"),
    EIGHT_HUNDRED_AND_TWO1_X("802.1X"),
    CLIENT_VPN("Client VPN");

    public final String value;

    private CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum(String value) {
        this.value = value;
    }
}
