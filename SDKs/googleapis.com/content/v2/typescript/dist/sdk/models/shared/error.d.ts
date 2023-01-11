import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An error returned by the API.
**/
export declare class ErrorT extends SpeakeasyBase {
    domain?: string;
    message?: string;
    reason?: string;
}
