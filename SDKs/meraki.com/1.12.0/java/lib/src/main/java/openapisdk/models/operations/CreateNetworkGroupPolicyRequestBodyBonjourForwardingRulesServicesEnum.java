package openapisdk.models.operations;


public enum CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum {
    ALL_SERVICES("All Services"),
    AIR_PLAY("AirPlay"),
    AFP("AFP"),
    BIT_TORRENT("BitTorrent"),
    FTP("FTP"),
    I_CHAT("iChat"),
    I_TUNES("iTunes"),
    PRINTERS("Printers"),
    SAMBA("Samba"),
    SCANNERS("Scanners"),
    SSH("SSH");

    public final String value;

    private CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum(String value) {
        this.value = value;
    }
}
