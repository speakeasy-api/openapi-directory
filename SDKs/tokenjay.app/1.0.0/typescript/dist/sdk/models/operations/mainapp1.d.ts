import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MainApp1Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    mainApp1400WildcardString?: string;
    /**
     * Unauthorized
     */
    mainApp1401WildcardString?: string;
    /**
     * Not Found
     */
    mainApp1404WildcardString?: string;
    /**
     * Conflict
     */
    mainApp1409WildcardString?: string;
}
