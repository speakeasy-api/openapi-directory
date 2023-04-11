import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomerGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateCustomerGroupRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateCustomerGroupRequest: shared.UpdateCustomerGroupRequest;
    /**
     * The ID of the customer group to update.
     */
    groupId: string;
}
export declare class UpdateCustomerGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCustomerGroupResponse?: shared.UpdateCustomerGroupResponse;
}
