import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCustomerGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteCustomerGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the customer group to delete.
     */
    groupId: string;
}
export declare class DeleteCustomerGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteCustomerGroupResponse?: shared.DeleteCustomerGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
