import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOntolIdentifierResourceRequest extends SpeakeasyBase {
    /**
     * List of labels
     */
    label: string[];
}
export declare class GetOntolIdentifierResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
