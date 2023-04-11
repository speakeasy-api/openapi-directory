import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostOntolIdentifierResourceRequest extends SpeakeasyBase {
    /**
     * List of labels
     */
    label: string[];
}
export declare class PostOntolIdentifierResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
