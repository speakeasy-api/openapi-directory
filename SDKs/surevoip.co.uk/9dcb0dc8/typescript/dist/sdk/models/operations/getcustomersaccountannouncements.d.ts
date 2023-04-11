import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomersAccountAnnouncementsRequest extends SpeakeasyBase {
    /**
     * Account ID of customer
     */
    account: number;
}
/**
 * OK
 */
export declare class GetCustomersAccountAnnouncements200ApplicationJSON extends SpeakeasyBase {
    list?: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema[];
}
export declare class GetCustomersAccountAnnouncementsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getCustomersAccountAnnouncements200ApplicationJSONObject?: GetCustomersAccountAnnouncements200ApplicationJSON;
    /**
     * Not found
     */
    oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
