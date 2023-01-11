import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGlossaryPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class CreateGlossaryRequestBodyGlossaries extends SpeakeasyBase {
    content: Uint8Array;
    glossaries: string;
}
export declare class CreateGlossaryRequestBody extends SpeakeasyBase {
    glossaries: CreateGlossaryRequestBodyGlossaries;
}
export declare class CreateGlossaryRequest extends SpeakeasyBase {
    pathParams: CreateGlossaryPathParams;
    request?: CreateGlossaryRequestBody;
}
export declare class CreateGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    glossary?: shared.Glossary;
    statusCode: number;
}
