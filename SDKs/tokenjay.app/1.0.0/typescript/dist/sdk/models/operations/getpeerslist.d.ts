import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPeersListRequest extends SpeakeasyBase {
    /**
     * Set to true to show peers not open to be connected
     */
    closedApi?: boolean;
    limit?: number;
    /**
     * Set to true to show unreachable peers in the list
     */
    unreachable?: boolean;
}
export declare class GetPeersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getPeersList400WildcardString?: string;
    /**
     * Unauthorized
     */
    getPeersList401WildcardString?: string;
    /**
     * Not Found
     */
    getPeersList404WildcardString?: string;
    /**
     * Conflict
     */
    getPeersList409WildcardString?: string;
}
