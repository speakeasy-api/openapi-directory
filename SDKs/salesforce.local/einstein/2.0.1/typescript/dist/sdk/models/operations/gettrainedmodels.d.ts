import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrainedModelsSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetTrainedModelsRequest extends SpeakeasyBase {
    /**
     * Number of models to return.
     */
    count?: string;
    /**
     * Dataset Id
     */
    datasetId: string;
    /**
     * Index of the model from which you want to start paging.
     */
    offset?: string;
}
export declare class GetTrainedModelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    modelList?: shared.ModelList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
