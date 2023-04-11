import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateWirelessRatePlanServerList: readonly ["https://preview.twilio.com"];
export declare class CreateWirelessRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateWirelessRatePlanCreateWirelessRatePlanRequest extends SpeakeasyBase {
    commandsEnabled?: boolean;
    dataEnabled?: boolean;
    dataLimit?: number;
    dataMetering?: string;
    friendlyName?: string;
    internationalRoaming?: string[];
    messagingEnabled?: boolean;
    nationalRoamingEnabled?: boolean;
    uniqueName?: string;
    voiceEnabled?: boolean;
}
export declare class CreateWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewWirelessRatePlan?: shared.PreviewWirelessRatePlan;
}
