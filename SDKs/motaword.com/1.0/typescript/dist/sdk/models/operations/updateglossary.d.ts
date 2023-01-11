import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGlossaryPathParams extends SpeakeasyBase {
    glossaryId: number;
    projectId: number;
}
export declare class UpdateGlossaryRequestBodyGlossaries extends SpeakeasyBase {
    content: Uint8Array;
    glossaries: string;
}
export declare class UpdateGlossaryRequestBody extends SpeakeasyBase {
    glossaries: UpdateGlossaryRequestBodyGlossaries;
}
export declare class UpdateGlossaryRequest extends SpeakeasyBase {
    pathParams: UpdateGlossaryPathParams;
    request?: UpdateGlossaryRequestBody;
}
export declare class UpdateGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    glossary?: shared.Glossary;
    statusCode: number;
}
