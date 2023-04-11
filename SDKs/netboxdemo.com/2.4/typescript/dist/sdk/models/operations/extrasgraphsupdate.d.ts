import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasGraphsUpdateRequest extends SpeakeasyBase {
    writableGraphInput: shared.WritableGraphInput;
    /**
     * A unique integer value identifying this graph.
     */
    id: number;
}
export declare class ExtrasGraphsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    graph?: shared.Graph;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
