import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSupportedCountriesV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of Supported Countries
     */
    supportedCountriesResponseV2?: shared.SupportedCountriesResponseV2;
}
