import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
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
 * Not allowed to perform operation
 */
export declare class DeleteTargetsTargetIdScheduledscansId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class DeleteTargetsTargetIdScheduledscansId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    deleteTargetsTargetIdScheduledscansId401ApplicationJSONObject?: DeleteTargetsTargetIdScheduledscansId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    deleteTargetsTargetIdScheduledscansId403ApplicationJSONObject?: DeleteTargetsTargetIdScheduledscansId403ApplicationJSON;
}
