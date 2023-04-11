import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkPiiRequestRequest extends SpeakeasyBase {
    networkId: string;
    requestId: string;
}
export declare class DeleteNetworkPiiRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
