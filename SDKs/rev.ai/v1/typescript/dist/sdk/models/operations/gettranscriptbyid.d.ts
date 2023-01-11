import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTranscriptByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTranscriptByIdHeaders extends SpeakeasyBase {
    accept?: shared.AcceptTranscriptEnum;
}
/**
 * Problem details object returned on errors
**/
export declare class GetTranscriptById404ApplicationProblemPlusJson extends SpeakeasyBase {
    status?: number;
    title?: string;
    type?: string;
}
/**
 * Problem details object returned on errors
**/
export declare class GetTranscriptById406ApplicationProblemPlusJson extends SpeakeasyBase {
    allowedValues?: string[];
    currentValue?: string;
    detail?: string;
    status?: number;
    title?: string;
    type?: string;
}
/**
 * Problem details object returned on errors
**/
export declare class GetTranscriptById409ApplicationProblemPlusJson extends SpeakeasyBase {
    allowedValues?: string[];
    currentValue?: string;
    detail?: string;
    status?: number;
    title?: string;
    type?: string;
}
export declare class GetTranscriptByIdRequest extends SpeakeasyBase {
    pathParams: GetTranscriptByIdPathParams;
    headers: GetTranscriptByIdHeaders;
}
export declare class GetTranscriptByIdResponse extends SpeakeasyBase {
    contentType: string;
    getTranscriptById401ApplicationProblemPlusJsonAny?: any;
    getTranscriptById404ApplicationProblemPlusJsonObject?: GetTranscriptById404ApplicationProblemPlusJson;
    getTranscriptById406ApplicationProblemPlusJsonObject?: GetTranscriptById406ApplicationProblemPlusJson;
    getTranscriptById409ApplicationProblemPlusJsonObject?: GetTranscriptById409ApplicationProblemPlusJson;
    statusCode: number;
    transcript?: shared.Transcript;
    transcriptText?: string;
}
