import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTemplateModelRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The data transfer object type name. E.g PensionPayInstruction
     */
    dtoDataType: string;
}
export declare class GetTemplateModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The data type template
     */
    getTemplateModel200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
