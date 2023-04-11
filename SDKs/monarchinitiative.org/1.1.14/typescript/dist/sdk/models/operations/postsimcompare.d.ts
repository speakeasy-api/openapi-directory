import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSimCompareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    simResult?: shared.SimResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
