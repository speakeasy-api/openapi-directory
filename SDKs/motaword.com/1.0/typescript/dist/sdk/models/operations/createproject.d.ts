import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectRequestBodyDocuments extends SpeakeasyBase {
    content: Uint8Array;
    documents: string;
}
export declare class CreateProjectRequestBodyGlossaries extends SpeakeasyBase {
    content: Uint8Array;
    glossaries: string;
}
export declare class CreateProjectRequestBodyStyleguides extends SpeakeasyBase {
    content: Uint8Array;
    styleguides: string;
}
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    callbackUrl?: string;
    couponCode?: string;
    custom?: string[];
    documents?: CreateProjectRequestBodyDocuments;
    glossaries?: CreateProjectRequestBodyGlossaries;
    sourceLanguage?: string;
    styleguides?: CreateProjectRequestBodyStyleguides;
    targetLanguages?: string[];
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    request?: CreateProjectRequestBody;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    project?: shared.Project;
    statusCode: number;
}
