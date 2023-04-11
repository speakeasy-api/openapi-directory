import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTrunksServerList: readonly ["https://routes.twilio.com"];
export declare class UpdateTrunksSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateTrunksUpdateTrunksRequest extends SpeakeasyBase {
    /**
     * A human readable description of this resource, up to 64 characters.
     */
    friendlyName?: string;
    /**
     * The Inbound Processing Region used for this SIP Trunk for voice
     */
    voiceRegion?: string;
}
export declare class UpdateTrunksRequest extends SpeakeasyBase {
    requestBody?: UpdateTrunksUpdateTrunksRequest;
    /**
     * The absolute URL of the SIP Trunk
     */
    sipTrunkDomain: string;
}
export declare class UpdateTrunksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    routesV2Trunks?: shared.RoutesV2Trunks;
}
