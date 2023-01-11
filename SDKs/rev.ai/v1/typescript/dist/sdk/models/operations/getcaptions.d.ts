import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCaptionsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCaptionsQueryParams extends SpeakeasyBase {
    speakerChannel?: number;
}
export declare class GetCaptionsHeaders extends SpeakeasyBase {
    accept?: shared.AcceptCaptionEnum;
}
/**
 * Problem details object returned on errors
**/
export declare class GetCaptions404ApplicationProblemPlusJson extends SpeakeasyBase {
    status?: number;
    title?: string;
    type?: string;
}
/**
 * Problem details object returned on errors
**/
export declare class GetCaptions405ApplicationProblemPlusJson extends SpeakeasyBase {
    detail?: string;
    status?: number;
    title?: string;
    type?: string;
}
/**
 * Problem details object returned on errors
**/
export declare class GetCaptions406ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class GetCaptions409ApplicationProblemPlusJson extends SpeakeasyBase {
    allowedValues?: string[];
    currentValue?: string;
    detail?: string;
    status?: number;
    title?: string;
    type?: string;
}
export declare class GetCaptionsRequest extends SpeakeasyBase {
    pathParams: GetCaptionsPathParams;
    queryParams: GetCaptionsQueryParams;
    headers: GetCaptionsHeaders;
}
export declare class GetCaptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getCaptions401ApplicationProblemPlusJsonAny?: any;
    getCaptions404ApplicationProblemPlusJsonObject?: GetCaptions404ApplicationProblemPlusJson;
    getCaptions405ApplicationProblemPlusJsonObject?: GetCaptions405ApplicationProblemPlusJson;
    getCaptions406ApplicationProblemPlusJsonObject?: GetCaptions406ApplicationProblemPlusJson;
    getCaptions409ApplicationProblemPlusJsonObject?: GetCaptions409ApplicationProblemPlusJson;
    statusCode: number;
}
