import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListContinuousChecksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listContinuousChecksOutput?: shared.ListContinuousChecksOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
