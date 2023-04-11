import { SpeakeasyBase } from "../../../internal/utils";
import { OBError1 } from "./oberror1";
/**
 * An array of detail error codes, and messages, and URLs to documentation to help remediation.
 */
export declare class OBErrorResponse1 extends SpeakeasyBase {
    /**
     * High level textual error code, to help categorize the errors.
     */
    code: string;
    errors: OBError1[];
    /**
     * A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.
     */
    id?: string;
    /**
     * Brief Error message, e.g., 'There is something wrong with the request parameters provided'
     */
    message: string;
}
