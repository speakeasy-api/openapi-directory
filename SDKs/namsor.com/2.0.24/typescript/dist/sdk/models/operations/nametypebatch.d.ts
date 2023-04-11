import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NameTypeBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class NameTypeBatchResponse extends SpeakeasyBase {
    /**
     * A list of commonTypeized names.
     */
    batchProperNounCategorizedOut?: shared.BatchProperNounCategorizedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
