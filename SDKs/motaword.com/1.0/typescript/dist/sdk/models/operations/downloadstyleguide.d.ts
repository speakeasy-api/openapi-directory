import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadStyleGuidePathParams extends SpeakeasyBase {
    projectId: number;
    styleGuideId: number;
}
export declare class DownloadStyleGuideRequest extends SpeakeasyBase {
    pathParams: DownloadStyleGuidePathParams;
}
export declare class DownloadStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    downloadStyleGuide200ApplicationJSONString?: string;
}
