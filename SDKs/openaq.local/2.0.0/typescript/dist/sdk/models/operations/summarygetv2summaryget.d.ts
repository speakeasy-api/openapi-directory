import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SummaryGetV2SummaryGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    openAQResult?: shared.OpenAQResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
