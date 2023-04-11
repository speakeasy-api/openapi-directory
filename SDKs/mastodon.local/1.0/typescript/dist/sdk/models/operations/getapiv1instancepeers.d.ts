import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1InstancePeersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Domains that this instance is aware of.
     */
    getApiV1InstancePeers200ApplicationJSONStrings?: string[];
}
