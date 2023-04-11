import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReligionIndianFullBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ReligionIndianFullBatchResponse extends SpeakeasyBase {
    /**
     * A list of religion-coded names.
     */
    batchPersonalNameReligionedOut?: shared.BatchPersonalNameReligionedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
