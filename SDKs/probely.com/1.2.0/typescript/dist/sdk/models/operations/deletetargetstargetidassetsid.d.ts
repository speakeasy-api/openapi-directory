import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
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
export declare class DeleteTargetsTargetIdAssetsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class DeleteTargetsTargetIdAssetsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class DeleteTargetsTargetIdAssetsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    deleteTargetsTargetIdAssetsId401ApplicationJSONObject?: DeleteTargetsTargetIdAssetsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    deleteTargetsTargetIdAssetsId403ApplicationJSONObject?: DeleteTargetsTargetIdAssetsId403ApplicationJSON;
    /**
     * Not found
     */
    deleteTargetsTargetIdAssetsId404ApplicationJSONObject?: DeleteTargetsTargetIdAssetsId404ApplicationJSON;
}
