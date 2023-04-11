import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProjectUpdate extends SpeakeasyBase {
    /**
     * Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
     */
    callbackUrl?: string;
    /**
     * Coupon code to redeem
     */
    couponCode?: string;
    /**
     * Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced.
     */
    custom?: string[];
    sourceLanguage?: string;
    targetLanguages?: string[];
}
