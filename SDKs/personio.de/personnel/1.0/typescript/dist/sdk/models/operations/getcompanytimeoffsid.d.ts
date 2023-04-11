import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCompanyTimeOffsIdRequest extends SpeakeasyBase {
    /**
     * Numeric `id` of the absence period
     */
    id: number;
}
export declare class GetCompanyTimeOffsIdResponse extends SpeakeasyBase {
    absencePeriodResponse?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
