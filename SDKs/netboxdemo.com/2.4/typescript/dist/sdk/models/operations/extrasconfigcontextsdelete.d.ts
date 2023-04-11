import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtrasConfigContextsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this config context.
     */
    id: number;
}
export declare class ExtrasConfigContextsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
