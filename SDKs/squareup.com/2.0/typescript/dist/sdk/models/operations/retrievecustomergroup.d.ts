import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveCustomerGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveCustomerGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the customer group to retrieve.
     */
    groupId: string;
}
export declare class RetrieveCustomerGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveCustomerGroupResponse?: shared.RetrieveCustomerGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
