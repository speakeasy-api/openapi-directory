import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateKeySecurity extends SpeakeasyBase {
    cookieSid: string;
}
export declare class UpdateKeyRequest extends SpeakeasyBase {
    /**
     * A JSON object containing key information
     */
    keyInput: shared.KeyInput;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
