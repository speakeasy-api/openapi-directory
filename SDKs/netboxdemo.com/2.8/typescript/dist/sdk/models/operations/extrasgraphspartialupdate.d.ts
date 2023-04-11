import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasGraphsPartialUpdateRequest extends SpeakeasyBase {
    graphInput: shared.GraphInput;
    /**
     * A unique integer value identifying this graph.
     */
    id: number;
}
export declare class ExtrasGraphsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    graph?: shared.Graph;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
