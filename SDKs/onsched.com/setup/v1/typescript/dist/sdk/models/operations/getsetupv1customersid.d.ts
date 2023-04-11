import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CustomersIdRequest extends SpeakeasyBase {
    /**
     * id of customer object
     */
    id: string;
}
export declare class GetSetupV1CustomersIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerViewModel?: shared.CustomerViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
