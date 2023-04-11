import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CountryBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CountryBatchResponse extends SpeakeasyBase {
    /**
     * A list of genderized names.
     */
    batchPersonalNameGeoOut?: shared.BatchPersonalNameGeoOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
