import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutDpsMessageRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The DPS message unique identifier. E.g. DPS001
     */
    dpsMessageId: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
}
export declare class PutDpsMessageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The dps message object.
     */
    dpsMessage?: shared.DpsMessage;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
