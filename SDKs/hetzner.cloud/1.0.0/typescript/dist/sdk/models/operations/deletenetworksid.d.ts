import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworksIdRequest extends SpeakeasyBase {
    /**
     * ID of the network
     */
    id: number;
}
export declare class DeleteNetworksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
