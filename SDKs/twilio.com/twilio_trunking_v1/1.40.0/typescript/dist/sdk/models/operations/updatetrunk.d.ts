import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTrunkServerList: readonly ["https://trunking.twilio.com"];
export declare class UpdateTrunkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call the `disaster_recovery_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateTrunkUpdateTrunkRequest extends SpeakeasyBase {
    /**
     * Whether Caller ID Name (CNAM) lookup should be enabled for the trunk. If enabled, all inbound calls to the SIP Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
     */
    cnamLookupEnabled?: boolean;
    /**
     * The HTTP method we should use to call the `disaster_recovery_url`. Can be: `GET` or `POST`.
     */
    disasterRecoveryMethod?: UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum;
    /**
     * The URL we should call using the `disaster_recovery_method` if an error occurs while sending SIP traffic towards the configured Origination URL. We retrieve TwiML from the URL and execute the instructions like any other normal TwiML call. See [Disaster Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery) for more information.
     */
    disasterRecoveryUrl?: string;
    /**
     * The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and `-` and must end with `pstn.twilio.com`. See [Termination Settings](https://www.twilio.com/docs/sip-trunking#termination) for more information.
     */
    domainName?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * Whether Secure Trunking is enabled for the trunk. If enabled, all calls going through the trunk will be secure using SRTP for media and TLS for signaling. If disabled, then RTP will be used for media. See [Secure Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking) for more information.
     */
    secure?: boolean;
    transferCallerId?: shared.TrunkEnumTransferCallerIdEnum;
    transferMode?: shared.TrunkEnumTransferSettingEnum;
}
export declare class UpdateTrunkRequest extends SpeakeasyBase {
    requestBody?: UpdateTrunkUpdateTrunkRequest;
    /**
     * The unique string that we created to identify the OriginationUrl resource to update.
     */
    sid: string;
}
export declare class UpdateTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trunkingV1Trunk?: shared.TrunkingV1Trunk;
}
