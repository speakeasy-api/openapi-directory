import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HeartbeatResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Server is working properly.
     */
    schemaNode?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
