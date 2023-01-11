import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStyleGuidePathParams extends SpeakeasyBase {
    projectId: number;
    styleGuideId: number;
}
export declare class UpdateStyleGuideRequestBodyStyleguides extends SpeakeasyBase {
    content: Uint8Array;
    styleguides: string;
}
export declare class UpdateStyleGuideRequestBody extends SpeakeasyBase {
    styleguides: UpdateStyleGuideRequestBodyStyleguides;
}
export declare class UpdateStyleGuideRequest extends SpeakeasyBase {
    pathParams: UpdateStyleGuidePathParams;
    request?: UpdateStyleGuideRequestBody;
}
export declare class UpdateStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    styleGuide?: shared.StyleGuide;
}
