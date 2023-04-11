import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRegulationServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchRegulationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRegulationRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Regulation resource.
     */
    sid: string;
}
export declare class FetchRegulationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    numbersV2RegulatoryComplianceRegulation?: shared.NumbersV2RegulatoryComplianceRegulation;
}
