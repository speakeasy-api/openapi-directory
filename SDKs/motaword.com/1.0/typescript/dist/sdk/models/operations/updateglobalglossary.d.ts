import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGlobalGlossaryRequestBodyGlossary extends SpeakeasyBase {
    content: Uint8Array;
    glossary: string;
}
export declare class UpdateGlobalGlossaryRequestBody extends SpeakeasyBase {
    glossary: UpdateGlobalGlossaryRequestBodyGlossary;
}
export declare class UpdateGlobalGlossaryRequest extends SpeakeasyBase {
    request?: UpdateGlobalGlossaryRequestBody;
}
export declare class UpdateGlobalGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
