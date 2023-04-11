import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLanguagePairsReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * Language pairs stats for client and vendors
     */
    languagePairsReport?: shared.LanguagePairsReport;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
