import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderChineseNameBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderChineseNameBatchResponse extends SpeakeasyBase {
    /**
     * A list of genderized names.
     */
    batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
