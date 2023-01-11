package openapisdk.models.shared;


public enum SubContractorSubContractorBusinessTypeEnum {
    SOLE_TRADER("SoleTrader"),
    COMPANY("Company"),
    PARTNERSHIP("Partnership"),
    TRUST("Trust");

    public final String value;

    private SubContractorSubContractorBusinessTypeEnum(String value) {
        this.value = value;
    }
}
