import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdTopVulnsRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
export declare class GetTargetsTargetIdTopVulns200ApplicationJSON extends SpeakeasyBase {
    /**
     * Vulnerability name
     */
    zero?: string;
    /**
     * Vulnerability count
     */
    one?: string;
}
export declare class GetTargetsTargetIdTopVulnsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Top vulnerabilities plot data
     */
    getTargetsTargetIdTopVulns200ApplicationJSONObjects?: GetTargetsTargetIdTopVulns200ApplicationJSON[];
}
