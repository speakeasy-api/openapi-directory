import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateOutgoingCallerIdServerList: readonly ["https://api.twilio.com"];
export declare class UpdateOutgoingCallerIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateOutgoingCallerIdRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resources to update.
     */
    accountSid: string;
    requestBody?: UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest;
    /**
     * The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to update.
     */
    sid: string;
}
export declare class UpdateOutgoingCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountOutgoingCallerId?: shared.ApiV2010AccountOutgoingCallerId;
}
