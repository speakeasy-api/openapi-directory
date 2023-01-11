import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A batch response error
**/
export declare class BatchResponseError extends SpeakeasyBase {
    error?: string;
    shipmentId?: Record<string, any>;
}
