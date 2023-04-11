import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsAllTopVulns200ApplicationJSON extends SpeakeasyBase {
    /**
     * Vulnerability name
     */
    zero?: string;
    /**
     * Vulnerability count
     */
    one?: string;
}
export declare class GetTargetsAllTopVulnsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Top vulnerabilities plot data
     */
    getTargetsAllTopVulns200ApplicationJSONObjects?: GetTargetsAllTopVulns200ApplicationJSON[];
}
