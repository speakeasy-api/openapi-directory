package openapisdk.models.shared;


public enum OsNameEnum {
    DEBIAN("debian"),
    KALI("kali"),
    UBUNTU("ubuntu"),
    REDHAT("redhat"),
    CENTOS("centos"),
    FEDORA("fedora"),
    SUSE("suse"),
    ORACLE("oracle"),
    SCIENTIFIC("scientific"),
    SLACKWARE("slackware"),
    XP("xp"),
    VISTA("vista"),
    SEVEN("seven"),
    TEN("10"),
    TWO_THOUSAND("2000"),
    TWO_THOUSAND_AND_THREE("2003"),
    TWO_THOUSAND_AND_EIGHT_R2("2008 r2"),
    TWO_THOUSAND_AND_TWELVE("2012"),
    TWO_THOUSAND_AND_TWELVE_R2("2012 r2"),
    TWO_THOUSAND_AND_SIXTEEN("2016");

    public final String value;

    private OsNameEnum(String value) {
        this.value = value;
    }
}
