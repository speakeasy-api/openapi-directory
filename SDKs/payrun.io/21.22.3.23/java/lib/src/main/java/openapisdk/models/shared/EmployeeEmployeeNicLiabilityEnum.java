package openapisdk.models.shared;


public enum EmployeeEmployeeNicLiabilityEnum {
    HAS_OTHER_JOB("HasOtherJob"),
    IS_FEMALE_ENTITLED_TO_REDUCED_RATE("IsFemaleEntitledToReducedRate"),
    IS_NOT_LIABLE("IsNotLiable"),
    IS_CONTRACTED_OUT("IsContractedOut"),
    IS_FULLY_LIABLE("IsFullyLiable"),
    IS_APPRENTICE("IsApprentice"),
    LEAVER_BEYOND6_WEEKS("LeaverBeyond6Weeks"),
    PAYMENT_AFTER_LEAVING("PaymentAfterLeaving");

    public final String value;

    private EmployeeEmployeeNicLiabilityEnum(String value) {
        this.value = value;
    }
}
