import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateExternalCampaignServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateExternalCampaignSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateExternalCampaignCreateExternalCampaignRequest extends SpeakeasyBase {
    /**
     * ID of the preregistered campaign.
     */
    campaignId: string;
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) that the resource is associated with.
     */
    messagingServiceSid: string;
}
export declare class CreateExternalCampaignResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    messagingV1ExternalCampaign?: shared.MessagingV1ExternalCampaign;
}
