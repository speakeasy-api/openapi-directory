import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    integratorCardPayloadResponse?: shared.IntegratorCardPayloadResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
