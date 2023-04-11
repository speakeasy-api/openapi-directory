import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MainAppResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    mainApp400WildcardString?: string;
    /**
     * Unauthorized
     */
    mainApp401WildcardString?: string;
    /**
     * Not Found
     */
    mainApp404WildcardString?: string;
    /**
     * Conflict
     */
    mainApp409WildcardString?: string;
}
