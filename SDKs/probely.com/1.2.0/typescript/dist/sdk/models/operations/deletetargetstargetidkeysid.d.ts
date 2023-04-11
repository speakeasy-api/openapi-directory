import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTargetsTargetIdKeysIdRequest extends SpeakeasyBase {
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
export declare class DeleteTargetsTargetIdKeysId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class DeleteTargetsTargetIdKeysId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
export declare class DeleteTargetsTargetIdKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Not allowed to perform operation
     */
    deleteTargetsTargetIdKeysId403ApplicationJSONObject?: DeleteTargetsTargetIdKeysId403ApplicationJSON;
    /**
     * Not found
     */
    deleteTargetsTargetIdKeysId404ApplicationJSONObject?: DeleteTargetsTargetIdKeysId404ApplicationJSON;
}
