import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCompositionSettingsServerList: readonly ["https://video.twilio.com"];
export declare class FetchCompositionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1CompositionSettings?: shared.VideoV1CompositionSettings;
}
