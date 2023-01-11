import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitTranscriptionJobMultipartFormDataMedia extends SpeakeasyBase {
    content: Uint8Array;
    media: string;
}
export declare class SubmitTranscriptionJobMultipartFormData extends SpeakeasyBase {
    media?: SubmitTranscriptionJobMultipartFormDataMedia;
    options?: shared.SubmitJobOptions;
}
export declare class SubmitTranscriptionJobRequests extends SpeakeasyBase {
    submitJobMediaUrlOptions?: shared.SubmitJobMediaUrlOptions;
    object?: SubmitTranscriptionJobMultipartFormData;
}
/**
 * Problem details object returned on errors
**/
export declare class SubmitTranscriptionJob400ApplicationProblemPlusJson extends SpeakeasyBase {
    parameters?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class SubmitTranscriptionJobRequest extends SpeakeasyBase {
    request: SubmitTranscriptionJobRequests;
}
export declare class SubmitTranscriptionJobResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
    submitTranscriptionJob400ApplicationProblemPlusJsonObject?: SubmitTranscriptionJob400ApplicationProblemPlusJson;
    submitTranscriptionJob401ApplicationProblemPlusJsonAny?: any;
    submitTranscriptionJob413ApplicationProblemPlusJsonAny?: any;
}
