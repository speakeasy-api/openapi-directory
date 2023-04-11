import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOntolLabelerResourceRequest extends SpeakeasyBase {
    /**
     * List of ids
     */
    id: string[];
}
export declare class GetOntolLabelerResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
