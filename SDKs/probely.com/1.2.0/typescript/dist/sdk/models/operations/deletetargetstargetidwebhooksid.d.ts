import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class DeleteTargetsTargetIdWebhooksId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class DeleteTargetsTargetIdWebhooksId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class DeleteTargetsTargetIdWebhooksId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    deleteTargetsTargetIdWebhooksId401ApplicationJSONObject?: DeleteTargetsTargetIdWebhooksId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    deleteTargetsTargetIdWebhooksId403ApplicationJSONObject?: DeleteTargetsTargetIdWebhooksId403ApplicationJSON;
    /**
     * Not found
     */
    deleteTargetsTargetIdWebhooksId404ApplicationJSONObject?: DeleteTargetsTargetIdWebhooksId404ApplicationJSON;
}
