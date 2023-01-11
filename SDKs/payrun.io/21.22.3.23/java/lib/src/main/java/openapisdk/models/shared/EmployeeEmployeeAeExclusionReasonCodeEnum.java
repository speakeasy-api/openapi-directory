package openapisdk.models.shared;


public enum EmployeeEmployeeAeExclusionReasonCodeEnum {
    OTHER_NOT_KNOWN("OtherNotKnown"),
    NOT_A_WORKER("NotAWorker"),
    NOT_UK_WORKER("NotUKWorker"),
    TEMPORARY_UK_WORKER("TemporaryUKWorker"),
    OUTSIDE_AGE_RANGE("OutsideAgeRange"),
    SINGLE_EMPLOYEE_DIRECTOR("SingleEmployeeDirector"),
    CEASED_MEMBERSHIP_WITHIN12_MONTHS("CeasedMembershipWithin12Months"),
    CEASED_MEMBERSHIP_BEYOND12_MONTHS("CeasedMembershipBeyond12Months"),
    WORKER_WULS_WITHIN12_MONTH("WorkerWULSWithin12Month"),
    WORKER_WULS_BEYOND12_MONTH("WorkerWULSBeyond12Month"),
    WORKER_IN_NOTICE_PERIOD("WorkerInNoticePeriod"),
    WORKER_TAX_PROTECTION("WorkerTaxProtection");

    public final String value;

    private EmployeeEmployeeAeExclusionReasonCodeEnum(String value) {
        this.value = value;
    }
}
