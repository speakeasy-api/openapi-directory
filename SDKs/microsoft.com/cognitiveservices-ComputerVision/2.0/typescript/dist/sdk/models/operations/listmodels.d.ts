import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListModelsResponse extends SpeakeasyBase {
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    /**
     * List of available domain models.
     */
    listModelsResult?: shared.ListModelsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
