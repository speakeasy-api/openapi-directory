import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEnginesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEnginesResponse?: shared.ListEnginesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
