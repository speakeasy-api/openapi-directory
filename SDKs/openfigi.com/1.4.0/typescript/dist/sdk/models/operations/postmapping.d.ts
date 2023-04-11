import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostMappingResponse extends SpeakeasyBase {
    /**
     * A list of FIGIs and their metadata.
     */
    bulkMappingJobResult?: any[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request (body).
     */
    postMapping400WildcardString?: string;
    /**
     * API Key is invalid.
     */
    postMapping401WildcardString?: string;
    /**
     * Unsupported 'Accept' type.
     */
    postMapping406WildcardString?: string;
    /**
     * Too many mapping jobs in request.
     */
    postMapping413WildcardString?: string;
    /**
     * Internal server error.
     */
    postMapping500WildcardString?: string;
}
