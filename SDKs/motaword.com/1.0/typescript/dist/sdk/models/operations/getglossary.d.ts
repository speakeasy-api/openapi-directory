import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGlossaryPathParams extends SpeakeasyBase {
    glossaryId: number;
    projectId: number;
}
export declare class GetGlossaryRequest extends SpeakeasyBase {
    pathParams: GetGlossaryPathParams;
}
export declare class GetGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    glossary?: shared.Glossary;
    statusCode: number;
}
