package openapisdk.models.shared;


public enum ProcessorTokenCreateRequestProcessorEnum {
    ACHQ("achq"),
    ALPACA("alpaca"),
    ASTRA("astra"),
    CHECK("check"),
    CHECKBOOK("checkbook"),
    CIRCLE("circle"),
    DRIVEWEALTH("drivewealth"),
    DWOLLA("dwolla"),
    GALILEO("galileo"),
    LITHIC("lithic"),
    MODERN_TREASURY("modern_treasury"),
    MOOV("moov"),
    OCROLUS("ocrolus"),
    PRIME_TRUST("prime_trust"),
    RIZE("rize"),
    SILA_MONEY("sila_money"),
    SBV_API("sbv_api"),
    UNIT("unit"),
    VESTA("vesta"),
    VOPAY("vopay"),
    WYRE("wyre");

    public final String value;

    private ProcessorTokenCreateRequestProcessorEnum(String value) {
        this.value = value;
    }
}
