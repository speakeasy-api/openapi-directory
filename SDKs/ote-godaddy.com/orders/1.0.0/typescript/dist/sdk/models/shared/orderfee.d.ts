import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderFee extends SpeakeasyBase {
    /**
     * Domain registration transaction fee charged by ICANN
     */
    icann?: number;
    /**
     * Sum of all fees
     */
    total: number;
}
