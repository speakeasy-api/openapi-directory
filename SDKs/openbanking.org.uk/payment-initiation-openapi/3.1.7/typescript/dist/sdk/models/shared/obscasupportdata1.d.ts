import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a character string with a maximum length of 40 characters.
 *
 * @remarks
 * Usage: This field indicates whether the PSU was subject to SCA performed by the TPP
 */
export declare enum OBSCASupportData1AppliedAuthenticationApproachEnum {
    Ca = "CA",
    Sca = "SCA"
}
/**
 * This field allows a PISP to request specific SCA Exemption for a Payment Initiation
 */
export declare enum OBSCASupportData1RequestedSCAExemptionTypeEnum {
    BillPayment = "BillPayment",
    ContactlessTravel = "ContactlessTravel",
    EcommerceGoods = "EcommerceGoods",
    EcommerceServices = "EcommerceServices",
    Kiosk = "Kiosk",
    Parking = "Parking",
    PartyToParty = "PartyToParty"
}
/**
 * Supporting Data provided by TPP, when requesting SCA Exemption.
 */
export declare class OBSCASupportData1 extends SpeakeasyBase {
    /**
     * Specifies a character string with a maximum length of 40 characters.
     *
     * @remarks
     * Usage: This field indicates whether the PSU was subject to SCA performed by the TPP
     */
    appliedAuthenticationApproach?: OBSCASupportData1AppliedAuthenticationApproachEnum;
    /**
     * If the payment is recurring, then this field is populated with the transaction identifier of the previous payment occurrence so that the ASPSP can verify that the PISP, amount and the payee are the same as the previous occurrence. The value here refers to the payment id e.g. DomesticPaymentId
     */
    referencePaymentOrderId?: string;
    /**
     * This field allows a PISP to request specific SCA Exemption for a Payment Initiation
     */
    requestedSCAExemptionType?: OBSCASupportData1RequestedSCAExemptionTypeEnum;
}
