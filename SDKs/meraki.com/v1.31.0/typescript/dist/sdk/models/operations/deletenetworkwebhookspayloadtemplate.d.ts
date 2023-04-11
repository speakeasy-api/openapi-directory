import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkWebhooksPayloadTemplateRequest extends SpeakeasyBase {
    networkId: string;
    payloadTemplateId: string;
}
export declare class DeleteNetworkWebhooksPayloadTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
