import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This indicates if transfers can be made to the Account Number.
 */
export declare enum UpdateAnAccountNumberParametersStatusEnum {
    Active = "active",
    Disabled = "disabled",
    Canceled = "canceled"
}
export declare class UpdateAnAccountNumberParameters extends SpeakeasyBase {
    /**
     * The name you choose for the Account Number.
     */
    name?: string;
    /**
     * This indicates if transfers can be made to the Account Number.
     */
    status?: UpdateAnAccountNumberParametersStatusEnum;
}
