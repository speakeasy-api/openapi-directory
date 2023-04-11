import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFineTunesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFineTunesResponse?: shared.ListFineTunesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
