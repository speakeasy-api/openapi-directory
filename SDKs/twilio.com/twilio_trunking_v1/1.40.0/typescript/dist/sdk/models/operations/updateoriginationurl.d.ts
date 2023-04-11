import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateOriginationUrlServerList: readonly ["https://trunking.twilio.com"];
export declare class UpdateOriginationUrlSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateOriginationUrlUpdateOriginationUrlRequest extends SpeakeasyBase {
    /**
     * Whether the URL is enabled. The default is `true`.
     */
    enabled?: boolean;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * The relative importance of the URI. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important URI.
     */
    priority?: number;
    /**
     * The SIP address you want Twilio to route your Origination calls to. This must be a `sip:` schema. `sips` is NOT supported.
     */
    sipUrl?: string;
    /**
     * The value that determines the relative share of the load the URI should receive compared to other URIs with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. URLs with higher values receive more load than those with lower ones with the same priority.
     */
    weight?: number;
}
export declare class UpdateOriginationUrlRequest extends SpeakeasyBase {
    requestBody?: UpdateOriginationUrlUpdateOriginationUrlRequest;
    /**
     * The unique string that we created to identify the OriginationUrl resource to update.
     */
    sid: string;
    /**
     * The SID of the Trunk from which to update the OriginationUrl.
     */
    trunkSid: string;
}
export declare class UpdateOriginationUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
