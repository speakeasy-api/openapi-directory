import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequisitionCreatedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Requisition has been successfully created
     */
    spectacularRequisitionV2?: shared.SpectacularRequisitionV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Fields required
     */
    requisitionCreated400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    requisitionCreated401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    requisitionCreated403ApplicationJSONObject?: Record<string, any>;
    /**
     * Agreement not found errors
     */
    requisitionCreated404ApplicationJSONObject?: Record<string, any>;
}
