package openapisdk.models.operations;


public enum GetSimSearchMetricEnum {
    PHENODIGM("phenodigm"),
    JACCARD("jaccard"),
    SIM_GIC("simGIC"),
    RESNIK("resnik"),
    SYMMETRIC_RESNIK("symmetric_resnik");

    public final String value;

    private GetSimSearchMetricEnum(String value) {
        this.value = value;
    }
}
