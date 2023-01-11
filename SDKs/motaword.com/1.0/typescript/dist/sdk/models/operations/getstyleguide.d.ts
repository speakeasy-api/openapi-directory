import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStyleGuidePathParams extends SpeakeasyBase {
    projectId: number;
    styleGuideId: number;
}
export declare enum GetStyleGuideWithEnum {
    Preview = "preview"
}
export declare class GetStyleGuideQueryParams extends SpeakeasyBase {
    with?: GetStyleGuideWithEnum[];
}
export declare class GetStyleGuideRequest extends SpeakeasyBase {
    pathParams: GetStyleGuidePathParams;
    queryParams: GetStyleGuideQueryParams;
}
export declare class GetStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    styleGuide?: shared.StyleGuide;
}
