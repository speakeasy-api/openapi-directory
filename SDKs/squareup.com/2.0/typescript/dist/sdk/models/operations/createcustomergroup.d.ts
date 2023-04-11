import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCustomerGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateCustomerGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCustomerGroupResponse?: shared.CreateCustomerGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
