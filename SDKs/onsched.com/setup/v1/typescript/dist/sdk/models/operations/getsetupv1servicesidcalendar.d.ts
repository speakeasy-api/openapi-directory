import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ServicesIdCalendarRequest extends SpeakeasyBase {
    /**
     * id of service object
     */
    id: string;
    /**
     * id of business location, defaults to primary business location
     */
    locationId?: string;
}
export declare class GetSetupV1ServicesIdCalendarResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceCalendarViewModel?: shared.ServiceCalendarViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
