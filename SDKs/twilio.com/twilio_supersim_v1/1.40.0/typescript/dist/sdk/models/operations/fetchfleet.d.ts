import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFleetServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchFleetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFleetRequest extends SpeakeasyBase {
    /**
     * The SID of the Fleet resource to fetch.
     */
    sid: string;
}
export declare class FetchFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supersimV1Fleet?: shared.SupersimV1Fleet;
}
