import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { LocalizedMessage } from "./localizedmessage";
/**
 * The warning code.
 */
export declare enum MigrationWarningCodeEnum {
    WarningCodeUnspecified = "WARNING_CODE_UNSPECIFIED",
    AdaptationWarning = "ADAPTATION_WARNING"
}
/**
 * Represents migration resource warning information that can be used with google.rpc.Status message. MigrationWarning is used to present the user with warning information in migration operations.
 */
export declare class MigrationWarning extends SpeakeasyBase {
    /**
     * Provides a localized error message that is safe to return to the user which can be attached to an RPC error.
     */
    actionItem?: LocalizedMessage;
    /**
     * The warning code.
     */
    code?: MigrationWarningCodeEnum;
    /**
     * URL(s) pointing to additional information on handling the current warning.
     */
    helpLinks?: Link[];
    /**
     * Provides a localized error message that is safe to return to the user which can be attached to an RPC error.
     */
    warningMessage?: LocalizedMessage;
    /**
     * The time the warning occurred.
     */
    warningTime?: string;
}
