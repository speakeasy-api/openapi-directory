import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectStringsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetProjectStringsRequest extends SpeakeasyBase {
    pathParams: GetProjectStringsPathParams;
}
export declare class GetProjectStringsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stringList?: shared.StringList;
}
