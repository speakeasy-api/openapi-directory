import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAgeUsdInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getAgeUsdInfo400WildcardString?: string;
    /**
     * Unauthorized
     */
    getAgeUsdInfo401WildcardString?: string;
    /**
     * Not Found
     */
    getAgeUsdInfo404WildcardString?: string;
    /**
     * Conflict
     */
    getAgeUsdInfo409WildcardString?: string;
}
