import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadGlossaryPathParams extends SpeakeasyBase {
    glossaryId: number;
    projectId: number;
}
export declare class DownloadGlossaryRequest extends SpeakeasyBase {
    pathParams: DownloadGlossaryPathParams;
}
export declare class DownloadGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    downloadGlossary200ApplicationJSONString?: string;
}
