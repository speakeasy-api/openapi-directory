import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { Cookies } from "./cookies";
import { Headers } from "./headers";
import { VerificationMethodEnum } from "./verificationmethodenum";
/**
 * Secondary domain of a target
 */
export declare class Asset extends SpeakeasyBase {
    /**
     * Date time of the last change
     */
    changed?: Date;
    /**
     * User that last modified the object
     */
    changedBy?: ChangedBy;
    /**
     * Custom cookies name/value pairs
     */
    cookies?: Cookies[];
    /**
     * Custom description for the resource
     */
    desc?: string;
    /**
     * Custom headers name value pairs
     */
    headers?: Headers[];
    /**
     * Fully qualified hostname
     */
    host?: string;
    /**
     * Object id.
     */
    id?: string;
    /**
     * Use this asset in scans.
     */
    include?: boolean;
    /**
     * Custom name for the resource
     */
    name?: string;
    /**
     * List of frameworks detected on this resource
     */
    stack?: string[];
    /**
     * Verification date time
     */
    verificationDate?: Date;
    /**
     * Reason for last verification failure.
     */
    verificationLastError?: string;
    /**
     * Type of verification:
     *
     * @remarks
     * * dns - we look or a TXT record on the host you registered containing
     * `Probely=<verification_token>`
     * * file - on the root of the path you registered we look for a file
     * named `<verification token>` containing `Probely`.
     *
     */
    verificationMethod?: VerificationMethodEnum;
    /**
     * Token used to verify
     */
    verificationToken?: string;
    /**
     * Has resource ownership been verified
     */
    verified?: boolean;
}
/**
 * Secondary domain of a target
 */
export declare class AssetInput extends SpeakeasyBase {
    /**
     * Custom cookies name/value pairs
     */
    cookies?: Cookies[];
    /**
     * Custom description for the resource
     */
    desc?: string;
    /**
     * Custom headers name value pairs
     */
    headers?: Headers[];
    /**
     * Fully qualified hostname
     */
    host?: string;
    /**
     * Use this asset in scans.
     */
    include?: boolean;
    /**
     * Custom name for the resource
     */
    name?: string;
}
