import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information about a potentially long-running operation with which a log entry is associated.
 */
export declare class LogEntryOperation extends SpeakeasyBase {
    /**
     * Optional. Set this to True if this is the first log entry in the operation.
     */
    first?: boolean;
    /**
     * Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
     */
    id?: string;
    /**
     * Optional. Set this to True if this is the last log entry in the operation.
     */
    last?: boolean;
    /**
     * Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
     */
    producer?: string;
}
