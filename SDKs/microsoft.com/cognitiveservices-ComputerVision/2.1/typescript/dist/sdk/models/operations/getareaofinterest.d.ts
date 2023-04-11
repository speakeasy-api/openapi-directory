import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAreaOfInterestResponse extends SpeakeasyBase {
    /**
     * The response includes the extracted area of interest in JSON format.
     */
    areaOfInterestResult?: shared.AreaOfInterestResult;
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
