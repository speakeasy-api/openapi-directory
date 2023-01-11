package openapisdk.models.shared;


public enum RearPortTemplateTypeValueEnum {
    EIGHTP8C("8p8c"),
    ONE_HUNDRED_AND_TEN_PUNCH("110-punch"),
    BNC("bnc"),
    MRJ21("mrj21"),
    FC("fc"),
    LC("lc"),
    LC_APC("lc-apc"),
    LSH("lsh"),
    LSH_APC("lsh-apc"),
    MPO("mpo"),
    MTRJ("mtrj"),
    SC("sc"),
    SC_APC("sc-apc"),
    ST("st");

    public final String value;

    private RearPortTemplateTypeValueEnum(String value) {
        this.value = value;
    }
}
