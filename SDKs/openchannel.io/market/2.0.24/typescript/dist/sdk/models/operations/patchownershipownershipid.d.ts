import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchOwnershipOwnershipIdRequest extends SpeakeasyBase {
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
export declare class PatchOwnershipOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
