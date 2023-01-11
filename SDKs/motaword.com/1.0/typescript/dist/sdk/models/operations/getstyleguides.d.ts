import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStyleGuidesPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare enum GetStyleGuidesWithEnum {
    Preview = "preview"
}
export declare class GetStyleGuidesQueryParams extends SpeakeasyBase {
    with?: GetStyleGuidesWithEnum[];
}
export declare class GetStyleGuidesRequest extends SpeakeasyBase {
    pathParams: GetStyleGuidesPathParams;
    queryParams: GetStyleGuidesQueryParams;
}
export declare class GetStyleGuidesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    styleGuideList?: shared.StyleGuideList;
}
