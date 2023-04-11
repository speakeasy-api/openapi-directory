import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * OK
 */
export declare class GetRiskParameters200ApplicationJSON extends SpeakeasyBase {
    riskParameters?: shared.RiskParameterV1[];
}
export declare class GetRiskParametersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getRiskParameters200ApplicationJSONObject?: GetRiskParameters200ApplicationJSON;
}
