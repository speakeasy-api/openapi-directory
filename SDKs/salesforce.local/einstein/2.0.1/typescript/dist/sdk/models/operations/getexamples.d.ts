import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetExamplesSecurity extends SpeakeasyBase {
    bearerToken: string;
}
/**
 * return examples that were created in the dataset as feedback
 */
export declare enum GetExamplesSourceEnum {
    All = "all",
    Feedback = "feedback",
    Upload = "upload"
}
export declare class GetExamplesRequest extends SpeakeasyBase {
    /**
     * Number of examples to return.
     */
    count?: string;
    /**
     * Dataset Id
     */
    datasetId: string;
    /**
     * Index of the example from which you want to start paging.
     */
    offset?: string;
    /**
     * return examples that were created in the dataset as feedback
     */
    source?: GetExamplesSourceEnum;
}
export declare class GetExamplesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    exampleList?: shared.ExampleList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
