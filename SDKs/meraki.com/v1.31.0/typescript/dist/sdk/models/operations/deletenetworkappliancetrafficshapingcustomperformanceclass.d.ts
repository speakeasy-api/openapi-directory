import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
    customPerformanceClassId: string;
    networkId: string;
}
export declare class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
