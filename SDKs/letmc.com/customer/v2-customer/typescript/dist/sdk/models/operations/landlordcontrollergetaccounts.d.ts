import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LandlordControllerGetAccountsRequest extends SpeakeasyBase {
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class LandlordControllerGetAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    landlordAccountingModel?: shared.LandlordAccountingModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
