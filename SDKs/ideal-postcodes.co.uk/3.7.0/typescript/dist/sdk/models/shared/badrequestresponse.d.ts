import { SpeakeasyBase } from "../../../internal/utils";
export declare class BadRequestResponseErrors extends SpeakeasyBase {
    errorCode?: string;
    /**
     * Indicates location of error in request query or URL parameter
     */
    message: string;
    /**
     * Indicates location of error in request query or URL parameter
     */
    path: string;
}
/**
 * Bad Request
 */
export declare class BadRequestResponse extends SpeakeasyBase {
    /**
     * `400X` type error response code
     */
    code: number;
    errors?: BadRequestResponseErrors[];
    /**
     * Bad request error description
     */
    message: string;
}
