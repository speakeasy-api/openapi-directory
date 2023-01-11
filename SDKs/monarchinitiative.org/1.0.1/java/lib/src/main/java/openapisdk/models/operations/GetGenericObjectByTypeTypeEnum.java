package openapisdk.models.operations;


public enum GetGenericObjectByTypeTypeEnum {
    GENE("gene"),
    VARIANT("variant"),
    GENOTYPE("genotype"),
    PHENOTYPE("phenotype"),
    DISEASE("disease"),
    GOTERM("goterm"),
    PATHWAY("pathway"),
    ANATOMY("anatomy"),
    SUBSTANCE("substance"),
    INDIVIDUAL("individual"),
    PUBLICATION("publication"),
    MODEL("model"),
    CASE_("case");

    public final String value;

    private GetGenericObjectByTypeTypeEnum(String value) {
        this.value = value;
    }
}
