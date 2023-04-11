import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasConfigContextsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this config context.
     */
    id: number;
}
export declare class ExtrasConfigContextsReadResponse extends SpeakeasyBase {
    configContext?: shared.ConfigContext;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
