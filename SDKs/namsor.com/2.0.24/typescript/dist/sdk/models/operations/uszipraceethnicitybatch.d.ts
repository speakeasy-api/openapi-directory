import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsZipRaceEthnicityBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class UsZipRaceEthnicityBatchResponse extends SpeakeasyBase {
    /**
     * A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally
     */
    batchFirstLastNameUSRaceEthnicityOut?: shared.BatchFirstLastNameUSRaceEthnicityOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
