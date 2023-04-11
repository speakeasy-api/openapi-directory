import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The carrier code enum. Accepts the values FEDEX or UPS.
 */
export declare enum AccountReturnCarrierCarrierCodeEnum {
    CarrierCodeUnspecified = "CARRIER_CODE_UNSPECIFIED",
    Fedex = "FEDEX",
    Ups = "UPS"
}
/**
 *  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program.
 */
export declare class AccountReturnCarrierInput extends SpeakeasyBase {
    /**
     * Name of the carrier account.
     */
    carrierAccountName?: string;
    /**
     * Number of the carrier account.
     */
    carrierAccountNumber?: string;
    /**
     * The carrier code enum. Accepts the values FEDEX or UPS.
     */
    carrierCode?: AccountReturnCarrierCarrierCodeEnum;
}
/**
 *  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program.
 */
export declare class AccountReturnCarrier extends SpeakeasyBase {
    /**
     * Output only. Immutable. The Google-provided unique carrier ID, used to update the resource.
     */
    carrierAccountId?: string;
    /**
     * Name of the carrier account.
     */
    carrierAccountName?: string;
    /**
     * Number of the carrier account.
     */
    carrierAccountNumber?: string;
    /**
     * The carrier code enum. Accepts the values FEDEX or UPS.
     */
    carrierCode?: AccountReturnCarrierCarrierCodeEnum;
}
