import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
    httpServerId: string;
    networkId: string;
}
export declare class DeleteNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
