import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAgentsResponse extends SpeakeasyBase {
    /**
     * array of agents
     */
    agents?: shared.Agent[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
