import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateRatePlanServerList: readonly ["https://wireless.twilio.com"];
export declare class CreateRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateRatePlanCreateRatePlanRequest extends SpeakeasyBase {
    /**
     * Whether SIMs can use GPRS/3G/4G/LTE data connectivity.
     */
    dataEnabled?: boolean;
    /**
     * The total data usage (download and upload combined) in Megabytes that the Network allows during one month on the home network (T-Mobile USA). The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB and the default value is `1000`.
     */
    dataLimit?: number;
    /**
     * The model used to meter data usage. Can be: `payg` and `quota-1`, `quota-10`, and `quota-50`. Learn more about the available [data metering models](https://www.twilio.com/docs/wireless/api/rateplan-resource#payg-vs-quota-data-plans).
     */
    dataMetering?: string;
    /**
     * A descriptive string that you create to describe the resource. It does not have to be unique.
     */
    friendlyName?: string;
    /**
     * The list of services that SIMs capable of using GPRS/3G/4G/LTE data connectivity can use outside of the United States. Can contain: `data` and `messaging`.
     */
    internationalRoaming?: string[];
    /**
     * The total data usage (download and upload combined) in Megabytes that the Network allows during one month when roaming outside the United States. Can be up to 2TB.
     */
    internationalRoamingDataLimit?: number;
    /**
     * Whether SIMs can make, send, and receive SMS using [Commands](https://www.twilio.com/docs/wireless/api/command-resource).
     */
    messagingEnabled?: boolean;
    /**
     * The total data usage (download and upload combined) in Megabytes that the Network allows during one month on non-home networks in the United States. The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB. See [national roaming](https://www.twilio.com/docs/wireless/api/rateplan-resource#national-roaming) for more info.
     */
    nationalRoamingDataLimit?: number;
    /**
     * Whether SIMs can roam on networks other than the home network (T-Mobile USA) in the United States. See [national roaming](https://www.twilio.com/docs/wireless/api/rateplan-resource#national-roaming).
     */
    nationalRoamingEnabled?: boolean;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * Deprecated.
     */
    voiceEnabled?: boolean;
}
export declare class CreateRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    wirelessV1RatePlan?: shared.WirelessV1RatePlan;
}
