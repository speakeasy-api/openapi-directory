import { SpeakeasyBase } from "../../../internal/utils";
export declare class PartnerStoreStatusStatus extends SpeakeasyBase {
    /**
     * Message describing the current creation status.
     */
    message?: string;
    /**
     * Percentage of the creation process that was already completed.
     */
    percentage?: string;
}
export declare class PartnerStoreStatus extends SpeakeasyBase {
    status?: PartnerStoreStatusStatus;
}
