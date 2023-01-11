package openapisdk.models.shared;


public enum FundingAuditFundingTypeEnum {
    ACH("ACH"),
    WIRE("WIRE"),
    EMBEDDED("EMBEDDED");

    public final String value;

    private FundingAuditFundingTypeEnum(String value) {
        this.value = value;
    }
}
