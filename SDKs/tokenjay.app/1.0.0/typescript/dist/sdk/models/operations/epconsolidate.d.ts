import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EpConsolidateRequest extends SpeakeasyBase {
    p2pkaddress: string;
}
export declare class EpConsolidateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    epConsolidate400WildcardString?: string;
    /**
     * Unauthorized
     */
    epConsolidate401WildcardString?: string;
    /**
     * Not Found
     */
    epConsolidate404WildcardString?: string;
    /**
     * Conflict
     */
    epConsolidate409WildcardString?: string;
}
