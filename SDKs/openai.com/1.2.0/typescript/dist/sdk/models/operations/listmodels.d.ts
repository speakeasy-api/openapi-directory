import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListModelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listModelsResponse?: shared.ListModelsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
