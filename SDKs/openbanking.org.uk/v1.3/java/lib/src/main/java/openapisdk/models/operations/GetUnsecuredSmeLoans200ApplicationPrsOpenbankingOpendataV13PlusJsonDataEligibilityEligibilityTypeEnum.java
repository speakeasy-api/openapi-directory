package openapisdk.models.operations;


public enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
    ANY_BUSINESS_CUSTOMER("AnyBusinessCustomer"),
    BUSINESS_ONLY("BusinessOnly"),
    CREDIT_CARD("CreditCard"),
    CREDIT_SCORING("CreditScoring"),
    EMAIL_ADDRESS("EmailAddress"),
    EXISTING_CUSTOMERS("ExistingCustomers"),
    ID_AND_V("IdAndV"),
    MORTGAGE("Mortgage"),
    NO_ARREARS_ON_LOAN("NoArrearsOnLoan"),
    NO_CUSTOMER_IN_ARREARS("NoCustomerInArrears"),
    NO_OVER_OVERDRAFT_THIRTY_DAYS("NoOverOverdraftThirtyDays"),
    NO_SOLE_UK_ACCOUNT_OR_BANKRUPT("NoSoleUkAccountOrBankrupt"),
    NTB("NTB"),
    NTB_BUSINESS("NTBBusiness"),
    SOLE_STUDENT_ACCOUNT("SoleStudentAccount"),
    SOLE_UK_ACCOUNT("SoleUkAccount"),
    STUDENTS_ONLY("StudentsOnly"),
    TWO_MONTHS_OF_COURSE_START("TwoMonthsOfCourseStart"),
    UCAS_FULLTIME_TWO_YEARS("UCASFulltimeTwoYears");

    public final String value;

    private GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum(String value) {
        this.value = value;
    }
}
