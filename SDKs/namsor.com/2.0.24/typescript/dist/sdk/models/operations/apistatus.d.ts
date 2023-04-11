import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiStatusResponse extends SpeakeasyBase {
    /**
     * Available classifiers and status
     */
    apiClassifiersStatusOut?: shared.APIClassifiersStatusOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
