import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PhonePlaybackRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class PhonePlaybackRequestBody extends SpeakeasyBase {
    audioUrl: string;
    limit?: number;
    limitTtl?: number;
    number: string;
    outputCase?: PhonePlaybackRequestBodyOutputCaseEnum;
}
export declare class PhonePlaybackRequest extends SpeakeasyBase {
    request?: PhonePlaybackRequestBody;
}
export declare class PhonePlaybackResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    phonePlaybackResponse?: shared.PhonePlaybackResponse;
    statusCode: number;
}
