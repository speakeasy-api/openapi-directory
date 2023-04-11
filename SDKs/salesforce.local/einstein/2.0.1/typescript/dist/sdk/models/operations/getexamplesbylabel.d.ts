import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetExamplesByLabelSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetExamplesByLabelRequest extends SpeakeasyBase {
    /**
     * Number of examples to return.
     */
    count?: string;
    /**
     * Label Id
     */
    labelId?: string;
    /**
     * Index of the example from which you want to start paging.
     */
    offset?: string;
}
export declare class GetExamplesByLabelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    exampleList?: shared.ExampleList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
