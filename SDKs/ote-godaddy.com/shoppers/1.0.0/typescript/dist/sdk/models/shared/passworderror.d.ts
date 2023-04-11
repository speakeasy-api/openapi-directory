import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Short identifier for the error, suitable for indicating the specific error within client code
 */
export declare enum PasswordErrorCodeEnum {
    PwBlackList = "PW_BLACK_LIST",
    PwTooShort = "PW_TOO_SHORT",
    PwTooLong = "PW_TOO_LONG",
    PwMissingUc = "PW_MISSING_UC",
    PwMissingNum = "PW_MISSING_NUM",
    PwRecentlyUsed = "PW_RECENTLY_USED",
    PwNotUnique = "PW_NOT_UNIQUE"
}
/**
 * Request was not successful
 */
export declare class PasswordError extends SpeakeasyBase {
    /**
     * Short identifier for the error, suitable for indicating the specific error within client code
     */
    code?: PasswordErrorCodeEnum;
    /**
     * Human-readable, English description of the error
     */
    message?: string;
    /**
     * Response type, always 'error'
     */
    type?: string;
}
