import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LbheartbeatResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returned if server is reachable.
     */
    schemaNode?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
