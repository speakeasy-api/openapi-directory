import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CompaniesTimezonesDateRequest extends SpeakeasyBase {
    /**
     * "YYYY-MM-DD: Date for timezone info"
     */
    date: Date;
}
export declare class GetSetupV1CompaniesTimezonesDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    timezoneViewModel?: shared.TimezoneViewModel;
}
