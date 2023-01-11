package openapisdk.models.shared;


public enum AggregateRequestFilteredDataQualityStandardEnum {
    DATA_QUALITY_UNKNOWN("dataQualityUnknown"),
    DATA_QUALITY_BLOOD_PRESSURE_ESH2002("dataQualityBloodPressureEsh2002"),
    DATA_QUALITY_BLOOD_PRESSURE_ESH2010("dataQualityBloodPressureEsh2010"),
    DATA_QUALITY_BLOOD_PRESSURE_AAMI("dataQualityBloodPressureAami"),
    DATA_QUALITY_BLOOD_PRESSURE_BHS_AA("dataQualityBloodPressureBhsAA"),
    DATA_QUALITY_BLOOD_PRESSURE_BHS_AB("dataQualityBloodPressureBhsAB"),
    DATA_QUALITY_BLOOD_PRESSURE_BHS_BA("dataQualityBloodPressureBhsBA"),
    DATA_QUALITY_BLOOD_PRESSURE_BHS_BB("dataQualityBloodPressureBhsBB"),
    DATA_QUALITY_BLOOD_GLUCOSE_ISO151972003("dataQualityBloodGlucoseIso151972003"),
    DATA_QUALITY_BLOOD_GLUCOSE_ISO151972013("dataQualityBloodGlucoseIso151972013");

    public final String value;

    private AggregateRequestFilteredDataQualityStandardEnum(String value) {
        this.value = value;
    }
}
