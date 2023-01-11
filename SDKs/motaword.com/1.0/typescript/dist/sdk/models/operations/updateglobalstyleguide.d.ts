import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGlobalStyleGuideRequestBodyStyleguide extends SpeakeasyBase {
    content: Uint8Array;
    styleguide: string;
}
export declare class UpdateGlobalStyleGuideRequestBody extends SpeakeasyBase {
    styleguide: UpdateGlobalStyleGuideRequestBodyStyleguide;
}
export declare class UpdateGlobalStyleGuideRequest extends SpeakeasyBase {
    request?: UpdateGlobalStyleGuideRequestBody;
}
export declare class UpdateGlobalStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
