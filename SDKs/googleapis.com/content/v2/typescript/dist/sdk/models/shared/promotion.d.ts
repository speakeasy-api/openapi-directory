import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare class Promotion extends SpeakeasyBase {
    promotionAmount?: Amount;
    /**
     * [required] ID of the promotion.
     */
    promotionId?: string;
}
