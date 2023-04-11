import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiasporaBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class DiasporaBatchResponse extends SpeakeasyBase {
    /**
     * A list of diaspora / ethnicity given a name and residency.
     */
    batchFirstLastNameDiasporaedOut?: shared.BatchFirstLastNameDiasporaedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
