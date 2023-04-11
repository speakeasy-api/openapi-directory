import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveGroupFromCustomerSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RemoveGroupFromCustomerRequest extends SpeakeasyBase {
    /**
     * The ID of the customer to remove from the group.
     */
    customerId: string;
    /**
     * The ID of the customer group to remove the customer from.
     */
    groupId: string;
}
export declare class RemoveGroupFromCustomerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    removeGroupFromCustomerResponse?: shared.RemoveGroupFromCustomerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
