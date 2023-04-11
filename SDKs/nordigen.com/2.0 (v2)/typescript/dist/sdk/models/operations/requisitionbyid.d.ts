import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequisitionByIdRequest extends SpeakeasyBase {
    /**
     * A UUID string identifying this requisition.
     */
    id: string;
}
export declare class RequisitionByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Get requisition by ID
     */
    requisitionV2?: shared.RequisitionV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid ID
     */
    requisitionById400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    requisitionById401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    requisitionById403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    requisitionById404ApplicationJSONObject?: Record<string, any>;
}
