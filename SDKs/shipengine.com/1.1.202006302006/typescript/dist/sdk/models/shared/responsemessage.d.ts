import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A response message that displays when additional info is needed for an address validation request.
**/
export declare class ResponseMessage extends SpeakeasyBase {
    code?: Record<string, any>;
    detailCode?: Record<string, any>;
    message?: string;
    type?: Record<string, any>;
}
