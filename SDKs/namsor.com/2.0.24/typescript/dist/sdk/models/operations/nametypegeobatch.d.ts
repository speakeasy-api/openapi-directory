import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NameTypeGeoBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class NameTypeGeoBatchResponse extends SpeakeasyBase {
    /**
     * A list of commonTypeized names.
     */
    batchProperNounCategorizedOut?: shared.BatchProperNounCategorizedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
