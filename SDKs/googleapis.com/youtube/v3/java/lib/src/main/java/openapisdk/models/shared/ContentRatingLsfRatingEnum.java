package openapisdk.models.shared;


public enum ContentRatingLsfRatingEnum {
    LSF_UNSPECIFIED("lsfUnspecified"),
    LSF_SU("lsfSu"),
    LSF_A("lsfA"),
    LSF_BO("lsfBo"),
    LSF13("lsf13"),
    LSF_R("lsfR"),
    LSF17("lsf17"),
    LSF_D("lsfD"),
    LSF21("lsf21"),
    LSF_UNRATED("lsfUnrated");

    public final String value;

    private ContentRatingLsfRatingEnum(String value) {
        this.value = value;
    }
}
