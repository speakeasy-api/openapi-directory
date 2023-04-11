import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * OK
 */
export declare class GetCoverageParameters200ApplicationJSON extends SpeakeasyBase {
    coverageParameters?: shared.CoverageParameterV1[];
}
export declare class GetCoverageParametersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getCoverageParameters200ApplicationJSONObject?: GetCoverageParameters200ApplicationJSON;
}
