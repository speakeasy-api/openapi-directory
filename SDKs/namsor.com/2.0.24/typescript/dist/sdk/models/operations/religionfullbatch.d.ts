import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReligionFullBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ReligionFullBatchResponse extends SpeakeasyBase {
    /**
     * A list of religion-coded names.
     */
    batchPersonalNameReligionedOut?: shared.BatchPersonalNameReligionedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
