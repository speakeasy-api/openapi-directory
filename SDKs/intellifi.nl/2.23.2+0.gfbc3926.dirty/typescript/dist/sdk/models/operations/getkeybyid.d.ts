import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetKeyByIdSecurity extends SpeakeasyBase {
    cookieSid: string;
}
export declare class GetKeyByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetKeyByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the key
     */
    key?: shared.Key;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
