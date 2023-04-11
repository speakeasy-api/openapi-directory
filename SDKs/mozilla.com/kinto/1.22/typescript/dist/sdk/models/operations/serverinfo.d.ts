import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ServerInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Return information about the running Instance.
     */
    schemaNode?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
