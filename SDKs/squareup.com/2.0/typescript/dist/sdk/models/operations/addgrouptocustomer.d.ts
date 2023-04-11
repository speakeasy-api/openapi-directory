import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddGroupToCustomerSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddGroupToCustomerRequest extends SpeakeasyBase {
    /**
     * The ID of the customer to add to a group.
     */
    customerId: string;
    /**
     * The ID of the customer group to add the customer to.
     */
    groupId: string;
}
export declare class AddGroupToCustomerResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addGroupToCustomerResponse?: shared.AddGroupToCustomerResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
