import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRecordingSettingsServerList: readonly ["https://video.twilio.com"];
export declare class FetchRecordingSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1RecordingSettings?: shared.VideoV1RecordingSettings;
}
