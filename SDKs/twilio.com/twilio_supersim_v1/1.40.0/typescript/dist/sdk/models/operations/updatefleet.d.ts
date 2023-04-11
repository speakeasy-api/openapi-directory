import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateFleetServerList: readonly ["https://supersim.twilio.com"];
export declare class UpdateFleetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * A string representing the HTTP method to use when making a request to `ip_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
 */
export declare enum UpdateFleetUpdateFleetRequestIpCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * A string representing the HTTP method to use when making a request to `sms_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
 */
export declare enum UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateFleetUpdateFleetRequest extends SpeakeasyBase {
    /**
     * The total data usage (download and upload combined) in Megabytes that each Super SIM assigned to the Fleet can consume during a billing period (normally one month). Value must be between 1MB (1) and 2TB (2,000,000). Defaults to 1GB (1,000).
     */
    dataLimit?: number;
    /**
     * A string representing the HTTP method to use when making a request to `ip_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
     */
    ipCommandsMethod?: UpdateFleetUpdateFleetRequestIpCommandsMethodEnum;
    /**
     * The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device to a special IP address. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored.
     */
    ipCommandsUrl?: string;
    /**
     * The SID or unique name of the Network Access Profile that will control which cellular networks the Fleet's SIMs can connect to.
     */
    networkAccessProfile?: string;
    /**
     * A string representing the HTTP method to use when making a request to `sms_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
     */
    smsCommandsMethod?: UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum;
    /**
     * The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored.
     */
    smsCommandsUrl?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
}
export declare class UpdateFleetRequest extends SpeakeasyBase {
    requestBody?: UpdateFleetUpdateFleetRequest;
    /**
     * The SID of the Fleet resource to update.
     */
    sid: string;
}
export declare class UpdateFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1Fleet?: shared.SupersimV1Fleet;
}
