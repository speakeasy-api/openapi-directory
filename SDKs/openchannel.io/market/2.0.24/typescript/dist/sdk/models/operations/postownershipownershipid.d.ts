import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostOwnershipOwnershipIdRequest extends SpeakeasyBase {
    /**
     * Custom JSON object that will be attached to this ownership record
     */
    customData?: string;
    /**
     * The date (in millis) of when this app ownership expires
     */
    expires?: number;
    /**
     * The id of the ownership to be updated
     */
    ownershipId: string;
}
export declare class PostOwnershipOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
