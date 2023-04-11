import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Standing order information
 */
export declare class SandboxStandingOrder extends SpeakeasyBase {
    /**
     * Standing order amount
     */
    amount?: number;
    /**
     * Standing order short description
     */
    description?: string;
    /**
     * Standing order final collection date
     */
    finalPaymentDate?: Date;
    /**
     * Standing order first collection date
     */
    firstPaymentDate?: Date;
    /**
     * Standing order frequency
     */
    frequency: string;
    /**
     * Standing order last executed payment date
     */
    lastPaymentDate?: Date;
    /**
     * Standing order next collection date
     */
    nextPaymentDate?: Date;
    /**
     * Standing order status (Active, Inactive)
     */
    status?: string;
}
