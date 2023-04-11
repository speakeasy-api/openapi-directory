import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCheckDetailsSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ListCheckDetailsRequest extends SpeakeasyBase {
    /**
     * ID of the Check
     */
    checkId: string;
    /**
     * This parameter is used to specify the language wanted for details, if not specified details will come in their original language.
     */
    lang?: string;
    /**
     * Start key value for the pagination
     */
    startKey?: string;
}
export declare class ListCheckDetailsResponse extends SpeakeasyBase {
    checkDetailsOutput?: shared.CheckDetailsOutput;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
