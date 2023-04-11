import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CustomersIdPrivacyRequest extends SpeakeasyBase {
    /**
     * id of customer object
     */
    id: string;
}
export declare class GetSetupV1CustomersIdPrivacyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerPrivacyViewModel?: shared.CustomerPrivacyViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
