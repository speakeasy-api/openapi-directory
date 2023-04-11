import { SpeakeasyBase } from "../../../internal/utils";
export declare class SimulateAWireTransferToYourAccountParameters extends SpeakeasyBase {
    /**
     * The identifier of the Account Number the inbound Wire Transfer is for.
     */
    accountNumberId: string;
    /**
     * The transfer amount in cents. Must be positive.
     */
    amount: number;
    /**
     * The sending bank will set beneficiary_address_line1 in production. You can simulate any value here.
     */
    beneficiaryAddressLine1?: string;
    /**
     * The sending bank will set beneficiary_address_line2 in production. You can simulate any value here.
     */
    beneficiaryAddressLine2?: string;
    /**
     * The sending bank will set beneficiary_address_line3 in production. You can simulate any value here.
     */
    beneficiaryAddressLine3?: string;
    /**
     * The sending bank will set beneficiary_name in production. You can simulate any value here.
     */
    beneficiaryName?: string;
    /**
     * The sending bank will set beneficiary_reference in production. You can simulate any value here.
     */
    beneficiaryReference?: string;
    /**
     * The sending bank will set originator_address_line1 in production. You can simulate any value here.
     */
    originatorAddressLine1?: string;
    /**
     * The sending bank will set originator_address_line2 in production. You can simulate any value here.
     */
    originatorAddressLine2?: string;
    /**
     * The sending bank will set originator_address_line3 in production. You can simulate any value here.
     */
    originatorAddressLine3?: string;
    /**
     * The sending bank will set originator_name in production. You can simulate any value here.
     */
    originatorName?: string;
    /**
     * The sending bank will set originator_to_beneficiary_information_line1 in production. You can simulate any value here.
     */
    originatorToBeneficiaryInformationLine1?: string;
    /**
     * The sending bank will set originator_to_beneficiary_information_line2 in production. You can simulate any value here.
     */
    originatorToBeneficiaryInformationLine2?: string;
    /**
     * The sending bank will set originator_to_beneficiary_information_line3 in production. You can simulate any value here.
     */
    originatorToBeneficiaryInformationLine3?: string;
    /**
     * The sending bank will set originator_to_beneficiary_information_line4 in production. You can simulate any value here.
     */
    originatorToBeneficiaryInformationLine4?: string;
}
