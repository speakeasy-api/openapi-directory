package openapisdk.models.shared;


public enum EmployerEmployerRuleExclusionsEnum {
    NONE("None"),
    NI_MISSING_PAY_INSTRUCTION_RULE("NiMissingPayInstructionRule"),
    TAX_MISSING_PAY_INSTRUCTION_RULE("TaxMissingPayInstructionRule"),
    TAX_CODE_UPLIFT_RULE("TaxCodeUpliftRule"),
    NI_SET_EXPECTED_LETTER_RULE("NiSetExpectedLetterRule"),
    NI_DATE_OF_BIRTH_CHANGE_RETROSPECTIVE_C_RULE("NiDateOfBirthChangeRetrospectiveCRule"),
    NI_DEFERMENT_STATUS_CHANGE_RULE("NiDefermentStatusChangeRule"),
    NI_END_CONTRACTED_OUT_TRANSFER_RULE("NiEndContractedOutTransferRule"),
    PAYMENT_AFTER_LEAVING_RULE("PaymentAfterLeavingRule"),
    LEAVER_END_INSTRUCTIONS_RULE("LeaverEndInstructionsRule"),
    P45_STUDENT_LOAN_INSTRUCTION_RULE("P45StudentLoanInstructionRule"),
    P45_TAX_INSTRUCTION_RULE("P45TaxInstructionRule"),
    P45_YTD_TAX_RULE("P45YtdTaxRule"),
    YTD_INSTRUCTION_RULE("YtdInstructionRule"),
    TAX_CODE_REGION_CHANGE_RULE("TaxCodeRegionChangeRule"),
    AUTO_ENROLMENT_STATUS_CHANGE_RULE("AutoEnrolmentStatusChangeRule"),
    EMPLOYEE_DECEASED_RULE("EmployeeDeceasedRule"),
    BENEFIT_INSTRUCTION_AUTO_END_RULE("BenefitInstructionAutoEndRule");

    public final String value;

    private EmployerEmployerRuleExclusionsEnum(String value) {
        this.value = value;
    }
}
