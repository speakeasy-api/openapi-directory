import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdKeysIdRequest extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdKeysId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class GetTargetsTargetIdKeysId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
export declare class GetTargetsTargetIdKeysIdResponse extends SpeakeasyBase {
    /**
     * API Key object
     */
    apiKey?: shared.APIKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Not allowed to perform operation
     */
    getTargetsTargetIdKeysId403ApplicationJSONObject?: GetTargetsTargetIdKeysId403ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdKeysId404ApplicationJSONObject?: GetTargetsTargetIdKeysId404ApplicationJSON;
}
