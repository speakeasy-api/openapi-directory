import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUsAppToPersonServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateUsAppToPersonSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUsAppToPersonCreateUsAppToPersonRequest extends SpeakeasyBase {
    /**
     * A2P Brand Registration SID
     */
    brandRegistrationSid: string;
    /**
     * A short description of what this SMS campaign does. Min length: 40 characters. Max length: 4096 characters.
     */
    description: string;
    /**
     * Indicates that this SMS campaign will send messages that contain links.
     */
    hasEmbeddedLinks: boolean;
    /**
     * Indicates that this SMS campaign will send messages that contain phone numbers.
     */
    hasEmbeddedPhone: boolean;
    /**
     * End users should be able to text in a keyword to receive help. Those keywords must be provided as part of the campaign registration request. This field is required if managing help keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum.
     */
    helpKeywords?: string[];
    /**
     * When customers receive the help keywords from their end users, Twilio customers are expected to send back an auto-generated response; this may include the brand name and additional support contact information. This field is required if managing help keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character maximum.
     */
    helpMessage?: string;
    /**
     * Required for all Campaigns. Details around how a consumer opts-in to their campaign, therefore giving consent to receive their messages. If multiple opt-in methods can be used for the same campaign, they must all be listed. 40 character minimum. 2048 character maximum.
     */
    messageFlow: string;
    /**
     * Message samples, at least 1 and up to 5 sample messages (at least 2 for sole proprietor), >=20 chars, <=1024 chars each.
     */
    messageSamples: string[];
    /**
     * If end users can text in a keyword to start receiving messages from this campaign, those keywords must be provided. This field is required if end users can text in a keyword to start receiving messages from this campaign. Values must be alphanumeric. 255 character maximum.
     */
    optInKeywords?: string[];
    /**
     * If end users can text in a keyword to start receiving messages from this campaign, the auto-reply messages sent to the end users must be provided. The opt-in response should include the Brand name, confirmation of opt-in enrollment to a recurring message campaign, how to get help, and clear description of how to opt-out. This field is required if end users can text in a keyword to start receiving messages from this campaign. 20 character minimum. 320 character maximum.
     */
    optInMessage?: string;
    /**
     * End users should be able to text in a keyword to stop receiving messages from this campaign. Those keywords must be provided. This field is required if managing opt out keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). Values must be alphanumeric. 255 character maximum.
     */
    optOutKeywords?: string[];
    /**
     * Upon receiving the opt-out keywords from the end users, Twilio customers are expected to send back an auto-generated response, which must provide acknowledgment of the opt-out request and confirmation that no further messages will be sent. It is also recommended that these opt-out messages include the brand name. This field is required if managing opt out keywords yourself (i.e. not using Twilio's Default or Advanced Opt Out features). 20 character minimum. 320 character maximum.
     */
    optOutMessage?: string;
    /**
     * A2P Campaign Use Case. Examples: [ 2FA, EMERGENCY, MARKETING..]
     */
    usAppToPersonUsecase: string;
}
export declare class CreateUsAppToPersonRequest extends SpeakeasyBase {
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) to create the resources from.
     */
    messagingServiceSid: string;
    requestBody?: CreateUsAppToPersonCreateUsAppToPersonRequest;
}
export declare class CreateUsAppToPersonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    messagingV1ServiceUsAppToPerson?: shared.MessagingV1ServiceUsAppToPerson;
}
