import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DoCreateBabelBoxResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    doCreateBabelBox400WildcardString?: string;
    /**
     * Unauthorized
     */
    doCreateBabelBox401WildcardString?: string;
    /**
     * Not Found
     */
    doCreateBabelBox404WildcardString?: string;
    /**
     * Conflict
     */
    doCreateBabelBox409WildcardString?: string;
}
