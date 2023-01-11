import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStyleGuidePathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class CreateStyleGuideRequestBodyStyleguides extends SpeakeasyBase {
    content: Uint8Array;
    styleguides: string;
}
export declare class CreateStyleGuideRequestBody extends SpeakeasyBase {
    styleguides: CreateStyleGuideRequestBodyStyleguides;
}
export declare class CreateStyleGuideRequest extends SpeakeasyBase {
    pathParams: CreateStyleGuidePathParams;
    request?: CreateStyleGuideRequestBody;
}
export declare class CreateStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    styleGuideList?: shared.StyleGuideList;
}
