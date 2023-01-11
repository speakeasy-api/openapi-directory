package openapisdk.models.operations;


public enum UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum {
    PRFSHA256("prfsha256"),
    PRFSHA1("prfsha1"),
    PRFMD5("prfmd5"),
    DEFAULT_("default");

    public final String value;

    private UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum(String value) {
        this.value = value;
    }
}
