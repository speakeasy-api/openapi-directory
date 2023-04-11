import { SpeakeasyBase } from "../../../internal/utils";
export declare class Device extends SpeakeasyBase {
    /**
     * Date/time of creation
     */
    createdAt: Date;
    /**
     * Whether device is disabled or not
     */
    disabled?: boolean;
    /**
     * Reason explaining why device had been disabled
     */
    disabledReason?: string;
    id: string;
    pushProvider: string;
    pushProviderName?: string;
    userId: string;
}
