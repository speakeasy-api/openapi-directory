import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State family configuration.
 */
export declare class StateFamilyConfig extends SpeakeasyBase {
    /**
     * If true, this family corresponds to a read operation.
     */
    isRead?: boolean;
    /**
     * The state family value.
     */
    stateFamily?: string;
}
