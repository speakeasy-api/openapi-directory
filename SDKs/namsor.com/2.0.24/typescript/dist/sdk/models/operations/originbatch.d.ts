import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OriginBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class OriginBatchResponse extends SpeakeasyBase {
    /**
     * A list of genderized names.
     */
    batchFirstLastNameOriginedOut?: shared.BatchFirstLastNameOriginedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
