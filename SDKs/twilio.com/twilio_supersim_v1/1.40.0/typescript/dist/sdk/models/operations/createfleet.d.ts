import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateFleetServerList: readonly ["https://supersim.twilio.com"];
export declare class CreateFleetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * A string representing the HTTP method to use when making a request to `ip_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
 */
export declare enum CreateFleetCreateFleetRequestIpCommandsMethodEnum {
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
export declare enum CreateFleetCreateFleetRequestSmsCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateFleetCreateFleetRequest extends SpeakeasyBase {
    /**
     * Defines whether SIMs in the Fleet are capable of using 2G/3G/4G/LTE/CAT-M data connectivity. Defaults to `true`.
     */
    dataEnabled?: boolean;
    /**
     * The total data usage (download and upload combined) in Megabytes that each Super SIM assigned to the Fleet can consume during a billing period (normally one month). Value must be between 1MB (1) and 2TB (2,000,000). Defaults to 1GB (1,000).
     */
    dataLimit?: number;
    /**
     * A string representing the HTTP method to use when making a request to `ip_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
     */
    ipCommandsMethod?: CreateFleetCreateFleetRequestIpCommandsMethodEnum;
    /**
     * The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device to a special IP address. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored.
     */
    ipCommandsUrl?: string;
    /**
     * The SID or unique name of the Network Access Profile that will control which cellular networks the Fleet's SIMs can connect to.
     */
    networkAccessProfile: string;
    /**
     * Defines whether SIMs in the Fleet are capable of sending and receiving machine-to-machine SMS via Commands. Defaults to `true`.
     */
    smsCommandsEnabled?: boolean;
    /**
     * A string representing the HTTP method to use when making a request to `sms_commands_url`. Can be one of `POST` or `GET`. Defaults to `POST`.
     */
    smsCommandsMethod?: CreateFleetCreateFleetRequestSmsCommandsMethodEnum;
    /**
     * The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored.
     */
    smsCommandsUrl?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
}
export declare class CreateFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    supersimV1Fleet?: shared.SupersimV1Fleet;
}
