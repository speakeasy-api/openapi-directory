package openapisdk.models.operations;


public enum GetSimCompareMetricEnum {
    PHENODIGM("phenodigm"),
    JACCARD("jaccard"),
    SIM_GIC("simGIC"),
    RESNIK("resnik"),
    SYMMETRIC_RESNIK("symmetric_resnik");

    public final String value;

    private GetSimCompareMetricEnum(String value) {
        this.value = value;
    }
}
