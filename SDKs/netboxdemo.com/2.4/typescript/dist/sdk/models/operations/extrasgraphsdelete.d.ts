import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtrasGraphsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this graph.
     */
    id: number;
}
export declare class ExtrasGraphsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
