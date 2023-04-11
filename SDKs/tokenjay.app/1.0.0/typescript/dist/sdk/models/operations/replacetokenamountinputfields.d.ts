import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReplaceTokenAmountInputFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    replaceTokenAmountInputFields400WildcardString?: string;
    /**
     * Unauthorized
     */
    replaceTokenAmountInputFields401WildcardString?: string;
    /**
     * Not Found
     */
    replaceTokenAmountInputFields404WildcardString?: string;
    /**
     * Conflict
     */
    replaceTokenAmountInputFields409WildcardString?: string;
}
