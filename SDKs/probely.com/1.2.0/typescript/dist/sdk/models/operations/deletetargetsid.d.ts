import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTargetsIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class DeleteTargetsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class DeleteTargetsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class DeleteTargetsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    deleteTargetsId401ApplicationJSONObject?: DeleteTargetsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    deleteTargetsId403ApplicationJSONObject?: DeleteTargetsId403ApplicationJSON;
    /**
     * Not found
     */
    deleteTargetsId404ApplicationJSONObject?: DeleteTargetsId404ApplicationJSON;
}
