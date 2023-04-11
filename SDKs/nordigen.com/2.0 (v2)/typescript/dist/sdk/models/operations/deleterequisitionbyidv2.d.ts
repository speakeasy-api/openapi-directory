import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRequisitionByIdV2Request extends SpeakeasyBase {
    /**
     * A UUID string identifying this requisition.
     */
    id: string;
}
export declare class DeleteRequisitionByIdV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid ID
     */
    deleteRequisitionByIdV2400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    deleteRequisitionByIdV2401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    deleteRequisitionByIdV2403ApplicationJSONObject?: Record<string, any>;
    /**
     * Not found error
     */
    deleteRequisitionByIdV2404ApplicationJSONObject?: Record<string, any>;
}
