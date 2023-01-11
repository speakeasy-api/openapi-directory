import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectStringsForLanguagePathParams extends SpeakeasyBase {
    language: string;
    projectId: number;
}
export declare class GetProjectStringsForLanguageRequest extends SpeakeasyBase {
    pathParams: GetProjectStringsForLanguagePathParams;
}
export declare class GetProjectStringsForLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stringList?: shared.StringList;
}
