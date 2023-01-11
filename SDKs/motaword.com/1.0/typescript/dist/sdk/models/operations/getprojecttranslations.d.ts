import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectTranslationsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetProjectTranslationsRequest extends SpeakeasyBase {
    pathParams: GetProjectTranslationsPathParams;
}
export declare class GetProjectTranslationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stringList?: shared.StringList;
}
